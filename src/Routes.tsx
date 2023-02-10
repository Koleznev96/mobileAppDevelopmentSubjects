/**
 * Основной файл для роутинга приложения
 * Экраны приложения должны быть зарегистрированы в этом файле
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/home/HomeScreen';
import MapScreen from './screens/map/MapScreen';

export type RootStackParamList = {
	Home: undefined;
	Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Home'}>
				<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
				<Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
