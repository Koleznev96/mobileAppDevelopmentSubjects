/**
 * Компонент кнопки
 */

import React, {FC, ReactNode} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle, Text, TextStyle, StyleSheet} from 'react-native';
import GlobalStyle from '../../GlobalStyle';

export interface TouchablePropsType {
	styleLabel?: StyleProp<TextStyle>;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	label?: string;
	children?: ReactNode;
}

const Button: FC<TouchablePropsType> = ({styleLabel, style, onPress, label, children}) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			{label ? <Text style={[GlobalStyle.CustomFontMedium, styles.label, styleLabel]}>{label}</Text> : children}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '100%',
		paddingVertical: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		fontSize: 16,
		textAlign: 'center',
	},
});

export default Button;
