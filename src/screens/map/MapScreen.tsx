/**
 * Экран Карты, отображает карту(Картинка)
 */

import React from 'react';
import {TouchableOpacity, ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import GlobalStyle from '../../components/GlobalStyle';
import GoBackSvg from '../../assets/icons/GoBack.svg';
import MapMiniSvg from '../../assets/icons/MapMini.svg';
import {RootStackParamList} from '../../Routes';

import {styles} from './useStyles';

type mapScreenProp = NativeStackNavigationProp<RootStackParamList, 'Map'>;

const MapScreen = () => {
	const navigation = useNavigation<mapScreenProp>();

	const goBackHandler = () => navigation.goBack();

	return (
		<SafeAreaView style={GlobalStyle.bodyRoot}>
			<View style={styles.containerHeader}>
				<TouchableOpacity onPress={goBackHandler} style={styles.goBack}>
					<GoBackSvg />
				</TouchableOpacity>

				<MapMiniSvg />
			</View>
			<ImageBackground style={styles.container} source={require('../../assets/images/map.png')}></ImageBackground>
		</SafeAreaView>
	);
};

export default MapScreen;
