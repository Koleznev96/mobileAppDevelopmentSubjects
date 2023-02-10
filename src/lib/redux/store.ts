import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistCombineReducers} from 'reduxjs-toolkit-persist';
import {subjectsReducer} from './subjects.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'subjects',
	storage: AsyncStorage,
};

const _persistedReducer = persistCombineReducers(persistConfig, {
	subjects: subjectsReducer,
});

export const store = configureStore({
	reducer: _persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				/* ignore persistance actions */
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
