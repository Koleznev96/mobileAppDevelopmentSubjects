/**
 * Компонент инпута
 */

import React, {FC} from 'react';
import {StyleProp, ViewStyle, TextInput, StyleSheet} from 'react-native';

import {Colors} from '../../../../utils/Colors';

export interface InputPropsType {
	placeholder?: string;
	value: string;
	setValue: (value: string) => void;
	style?: StyleProp<ViewStyle>;
	error?: boolean;
}

const Input: FC<InputPropsType> = ({placeholder, value, setValue, style, error}) => {
	return (
		<TextInput
			value={value}
			placeholderTextColor={Colors.InputDefaultColot}
			style={[styles.input, style, error ? styles.error : null]}
			placeholder={placeholder}
			onChangeText={value => setValue(value)}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		width: '100%',
		height: 32,
		paddingVertical: 6,
		color: Colors.PrimaryColor,
		fontSize: 13,
		borderWidth: 0.5,
		borderColor: Colors.InputDefaultColot,
		borderRadius: 7,
		marginBottom: 15,
	},
	error: {
		borderColor: Colors.ErrorColor,
	},
});

export default Input;
