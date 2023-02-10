/**
 * Компонент для избежания клавиатуры при вводе текста
 */

import React from 'react';
import {
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
	KeyboardAvoidingViewProps,
} from 'react-native';

interface Props extends KeyboardAvoidingViewProps {
	children: React.ReactNode;
}

export const KeyboardAvoiding = ({children, style}: Props) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
