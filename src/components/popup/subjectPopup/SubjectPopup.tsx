/**
 * Компонент попапа для добавления предмета
 */

import React, {FC, useState, useRef, useEffect} from 'react';
import {StyleSheet, Animated, View, Text, Pressable} from 'react-native';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';

import {useActions} from '../../../lib/hooks/actions';
import {useAppSelector} from '../../../lib/hooks/redux';
import {Colors} from '../../../utils/Colors';
import GlobalStyle from '../../GlobalStyle';
import Blackout from '../../ui/blackout/Blackout';
import Button from '../../ui/button/Button';
import Input from './components/Input';

export interface BlackoutPropsType {
	statusView: boolean;
	setStatusView: (status: boolean) => void;
}

interface Props {
	updateSubjects: ActionCreatorWithPayload<Subject, string>;
}

const SubjectPopup: FC<BlackoutPropsType> = ({statusView, setStatusView}) => {
	const {updateSubjects}: Props = useActions();
	const {subjects}: SubjectInit = useAppSelector(state => state.subjects);
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const firstUpdate = useRef(true);
	const [status, setStatus] = useState(false);
	const [subjectTitle, setSubjectTitle] = useState('');
	const [subjectDescription, setSubjectDescription] = useState('');
	const [erorrs, setErorrs] = useState({
		title: false,
		description: false,
	});

	const onAnimated = () => {
		if (statusView) setStatus(true);
		Animated.timing(fadeAnim, {
			toValue: statusView ? 1 : 0,
			duration: 200,
			useNativeDriver: true,
		}).start(() => {
			if (!statusView) setStatus(false);
		});
	};

	const cancelFonm = () => {
		setStatusView(false);
	};

	const createSublect = () => {
		setErorrs({title: false, description: false});
		if (subjectTitle.length < 1) {
			setErorrs({...erorrs, title: true});
			return;
		}
		if (subjectDescription.length < 1) {
			setErorrs({...erorrs, description: true});
			return;
		}
		updateSubjects([
			...subjects,
			{
				id: subjects.length ? subjects[subjects.length - 1].id + 1 : 0,
				title: subjectTitle,
				description: subjectDescription,
				status: false,
			},
		]);
		setSubjectTitle('');
		setSubjectDescription('');
		cancelFonm();
	};

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
		} else {
			onAnimated();
		}
	}, [statusView]);

	if (!status) return null;

	return (
		<Blackout onPress={() => cancelFonm()} animetedValue={fadeAnim} style={styles.blackout}>
			<Pressable style={styles.container}>
				<View style={styles.form}>
					<Text style={[GlobalStyle.CustomFontMedium, styles.title]}>Добавить предмет</Text>
					<Text style={[GlobalStyle.CustomFontRegular, styles.subtitle]}>Укажите заголовок и задание</Text>
					<Input placeholder="Заголовок" value={subjectTitle} setValue={setSubjectTitle} error={erorrs.title} />
					<Input
						placeholder="Задание"
						value={subjectDescription}
						setValue={setSubjectDescription}
						error={erorrs.description}
					/>
				</View>
				<View style={styles.containerButtons}>
					<Button label="Отмена" onPress={() => cancelFonm()} style={styles.button} styleLabel={styles.text} />
					<Button
						label="Сохранить"
						onPress={() => createSublect()}
						style={styles.button}
						styleLabel={styles.textActive}
					/>
				</View>
			</Pressable>
		</Blackout>
	);
};

const styles = StyleSheet.create({
	blackout: {
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	container: {
		width: '100%',
		borderRadius: 14,
		backgroundColor: Colors.MainColor,
		paddingTop: 18,
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: 4,
	},
	form: {
		width: '100%',
		paddingHorizontal: 16,
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 2,
	},
	title: {
		fontSize: 17,
		color: Colors.PrimaryColor,
		marginBottom: 4,
	},
	subtitle: {
		fontSize: 13,
		color: '#737A82',
		marginBottom: 16,
	},
	containerButtons: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		width: '50%',
		paddingVertical: 14,
	},
	textActive: {
		fontSize: 16,
		color: Colors.SecondaryColor,
	},
	text: {
		fontSize: 16,
		color: '#C3C3C5',
	},
});

export default SubjectPopup;
