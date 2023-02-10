/**
 * Компонент карточки
 */

import React from 'react';
import {TouchableOpacity, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {Colors} from '../../../utils/Colors';

type CardPropsType = {
	style?: StyleProp<ViewStyle>;
	children?: React.ReactNode;
	onPress?: () => void;
};

const Card = ({style, children, onPress}: CardPropsType) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.card, style]}>
			{children}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 120,
		height: 156,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 14,
		backgroundColor: Colors.SecondaryColor,
		margin: 16,
	},
});

export default Card;
