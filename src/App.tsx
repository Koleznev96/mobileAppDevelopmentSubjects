/**
 * О проекте
 * Данное приложение предстовляет собой список заданий, с возможностью:
 *
 * фильтрации;
 * создания;
 * отмечать выполненое задание;
 * удалять задание.
 *
 * Разработчик: Колезнев Алексей Владимирович, КИ20-16/1Б
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import {Routes} from './Routes';
import {store} from './lib/redux/store';
import {persistStore} from 'reduxjs-toolkit-persist';

const persistor = persistStore(store);

// Инициаализация стора и роутинга
const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					<Routes />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
