/**
 * Компонент карточки погоды
 */

import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

import WeatherSvg from '../../assets/icons/Weather.svg';
import {Colors} from '../../utils/Colors';
import Card from '../ui/card/Card';
import GlobalStyle from '../GlobalStyle';

type CardPropsType = {
	updateDataHandler: () => void;
	isLoading: Boolean;
	value: String;
	city: String;
};

const CardWeather = ({updateDataHandler, isLoading, value, city}: CardPropsType) => {
	const updateStatus = () => {
		updateDataHandler();
	};

	return (
		<Card onPress={updateStatus}>
			{isLoading ? (
				<ActivityIndicator size={40} color={Colors.MainColor} style={styles.loader} />
			) : (
				<View style={styles.card}>
					<WeatherSvg />
					<Text style={[GlobalStyle.CustomFontBold, styles.carValue]}>{value}°</Text>
					<Text style={[GlobalStyle.CustomFontLite, styles.cardCity]}>{city}</Text>
				</View>
			)}
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		height: '100%',
		padding: 14,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	carValue: {
		color: Colors.MainColor,
		fontSize: 24,
	},
	cardCity: {
		color: Colors.MainColor,
		fontSize: 13,
	},
	loader: {
		width: 40,
		height: 40,
	},
});

export default CardWeather;
