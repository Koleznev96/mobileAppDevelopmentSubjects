/**
 * Экран Карты, отображает карту(Картинка)
 */

import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import YaMap, {Marker} from 'react-native-yamap';
import _ from 'lodash';

import GlobalStyle from '../../components/GlobalStyle';
import GoBackSvg from '../../assets/icons/GoBack.svg';
import MapMiniSvg from '../../assets/icons/MapMini.svg';
import MarkerSvg from '../../assets/icons/Marker.svg';
import {RootStackParamList} from '../../Routes';

import {styles} from './useStyles';

type mapScreenProp = NativeStackNavigationProp<RootStackParamList, 'Map'>;

const MapScreen = () => {
	const navigation = useNavigation<mapScreenProp>();
	const [activeData, setActiveData] = useState<string | undefined>(undefined);

	const goBackHandler = () => navigation.goBack();

	const onChange = (data: string | undefined) => {
		setActiveData(data);
		setTimeout(() => setActiveData(undefined), 30000);
	};

	return (
		<SafeAreaView style={GlobalStyle.bodyRoot}>
			<View style={styles.containerHeader}>
				<TouchableOpacity onPress={goBackHandler} style={styles.goBack}>
					<GoBackSvg />
				</TouchableOpacity>

				<MapMiniSvg />
			</View>
			<YaMap
				style={styles.container}
				showUserPosition={false}
				rotateGesturesEnabled={false}
				mapType={'vector'}
				initialRegion={{
					lat: 56.0043,
					lon: 92.85,
					zoom: 12,
					azimuth: 0,
				}}
				// onMapPress={() => onChange(undefined)}
				onPointerEnter={() => console.log('gggg')}
			>
				<Marker
					onPress={() => {
						onChange('Здание 1');
					}}
					point={{lat: 56.0043, lon: 92.85}}
				>
					<MarkerSvg />
				</Marker>
				<Marker onPress={() => onChange('Здание 2')} point={{lat: 56.0443, lon: 92.85}}>
					<MarkerSvg />
				</Marker>
				<Marker onPress={() => onChange('Здание 3')} point={{lat: 56.0243, lon: 92.8}}>
					<MarkerSvg />
				</Marker>
				<Marker onPress={() => onChange('Здание ИКИТ')} point={{lat: 55.9945, lon: 92.7975}}>
					<MarkerSvg />
				</Marker>
			</YaMap>
			{!_.isUndefined(activeData) && (
				<View style={styles.options}>
					<Text>{`Описание: ${activeData}`}</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default MapScreen;
