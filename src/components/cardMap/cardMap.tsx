/**
 * Компонент карточки с картой
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import MapSvg from '../../assets/icons/Map.svg';
import ArrowRightSvg from '../../assets/icons/ArrowRight.svg';
import Card from '../ui/card/Card';

type CardPropsType = {
	mapHandler: () => void;
};

const CardMap = ({mapHandler}: CardPropsType) => {
	return (
		<Card onPress={mapHandler} style={styles.card}>
			<MapSvg />
			<View style={styles.cardBottom}>
				<ArrowRightSvg />
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		paddingTop: 34,
	},
	cardBottom: {
		width: '100%',
		paddingHorizontal: 4,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});

export default CardMap;
