/**
 * Экран домашней страницы, с отображением всех заданий
 */

import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import CardSubject from '../../components/cardSubject/CardSubject';
import GlobalStyle from '../../components/GlobalStyle';
import Button from '../../components/ui/button/Button';
import {useActions} from '../../lib/hooks/actions';
import {useAppSelector} from '../../lib/hooks/redux';
import FilterPopup from '../../components/popup/filterPopup/FilterPopup';
import {filterSubjects} from '../../helpers/filters';
import SubjectPopup from '../../components/popup/subjectPopup/SubjectPopup';
import CardWeather from '../../components/cardWeather/cardWeather';
import CardMap from '../../components/cardMap/cardMap';
import {RootStackParamList} from '../../Routes';

import {styles} from './useStyles';
import {createTable, deleteSubject, getDBConnection, getSubjects, updateSubject} from '../../lib/sqlite/db-service';

type Props = {
	updateSubjects: ActionCreatorWithPayload<Subjects, string>;
	deleteItem: ActionCreatorWithPayload<Subject, string>;
};

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
	const navigation = useNavigation<homeScreenProp>();
	const {updateSubjects, deleteItem}: Props = useActions();
	const {subjects}: SubjectInit = useAppSelector(state => state.subjects);
	const [statusViewFilter, setStatusViewFilter] = useState(false);
	const [statusCreateView, setStatusCreateView] = useState(false);
	const [filterData, setFilterData] = useState(subjects);
	const [statusFilter, setStatusFilter] = useState('Показывать все задания');
	const [isLoadingWeather, setIsLoadingWeather] = useState(false);

	const loadDataCallback = useCallback(async () => {
		try {
			const connect = await getDBConnection();
			await createTable(connect);
			const storedSubjects = await getSubjects(connect);
			console.log('storedSubjects-', storedSubjects);
			updateSubjects(storedSubjects);
		} catch (error) {
			console.error(error);
		}
	}, [getDBConnection, createTable]);

	useEffect(() => {
		loadDataCallback();
	}, []);

	const deleteDataSubject = async (subject: Subject) => {
		deleteItem(subject);
		try {
			const connect = await getDBConnection();
			deleteSubject(connect, subject.id);
		} catch (error) {
			console.error(error);
		}
	};

	const viewFilter = () => setStatusViewFilter(!statusViewFilter);

	const viewAdd = () => setStatusCreateView(!statusCreateView);

	const filterHandler = (status: string) => {
		setStatusViewFilter(false);
		if (status === 'default') {
			return;
		}
		setStatusFilter(status);
		const newDataFilter = filterSubjects(subjects, status);
		setFilterData(newDataFilter);
	};

	useEffect(() => {
		const newDataFilter = filterSubjects(subjects, statusFilter);
		setFilterData(newDataFilter ? newDataFilter : filterData);
	}, [subjects]);

	const updateStatusCard = async (item: Subject) => {
		updateSubjects(
			subjects.map((subject: Subject) => {
				if (subject.id !== item.id) {
					return subject;
				} else {
					return {...subject, status: !item.status};
				}
			}),
		);
		try {
			const connect = await getDBConnection();
			updateSubject(connect, {...item, status: !item.status});
		} catch (error) {
			console.error(error);
		}
	};

	const updateWeather = useCallback(() => {
		// TODO: подключить API погоды

		if (isLoadingWeather) return;
		setIsLoadingWeather(true);
		setTimeout(() => setIsLoadingWeather(false), 1500);
	}, [setIsLoadingWeather, isLoadingWeather]);

	const mapHandler = () => navigation.navigate('Map');

	return (
		<SafeAreaView style={GlobalStyle.bodyRoot}>
			<FilterPopup onPress={filterHandler} statusView={statusViewFilter} />
			<SubjectPopup statusView={statusCreateView} setStatusView={setStatusCreateView} />
			<View style={styles.containerHeader}>
				<CardWeather updateDataHandler={updateWeather} isLoading={isLoadingWeather} value={'-5'} city={'Красноярск'} />
				<CardMap mapHandler={mapHandler} />
			</View>
			<View style={styles.containerHeader}>
				<Button
					label={statusFilter}
					onPress={viewFilter}
					style={styles.buttonFilter}
					styleLabel={styles.buttonFilterLabel}
				/>
			</View>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollViewContent}
				showsHorizontalScrollIndicator={false}
				keyboardShouldPersistTaps="handled"
			>
				{subjects.length > 0 ? (
					filterData.map((item: Subject) => (
						<CardSubject key={item.id} data={item} updateSubjects={updateStatusCard} deleteCard={deleteDataSubject} />
					))
				) : (
					<Text style={[GlobalStyle.CustomFontRegular, styles.emptyList]}>Список пуст</Text>
				)}
			</ScrollView>
			<Button label="Добавить" onPress={viewAdd} style={styles.buttonAdd} styleLabel={styles.buttonAddLabel} />
		</SafeAreaView>
	);
};

export default HomeScreen;
