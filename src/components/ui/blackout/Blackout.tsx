/**
 * Компонент для создания полупрозрачного фона
 */

import React, {FC, ReactNode} from 'react';
import {StyleProp, ViewStyle, StyleSheet, Animated, Pressable} from 'react-native';
import {KeyboardAvoiding} from '../keyboardAvoiding/KeyboardAvoiding';

export interface BlackoutPropsType {
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	animetedValue: Animated.Value;
}

const Blackout: FC<BlackoutPropsType> = ({style, onPress, children, animetedValue}) => {
	return (
		<Animated.View style={[styles.animated, {opacity: animetedValue}]}>
			<KeyboardAvoiding style={styles.container}>
				<Pressable onPress={onPress} style={[styles.blackout, style]}>
					{children}
				</Pressable>
			</KeyboardAvoiding>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	blackout: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.7)',
	},
	container: {
		flex: 1,
	},
	animated: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 3000,
	},
});

export default Blackout;
