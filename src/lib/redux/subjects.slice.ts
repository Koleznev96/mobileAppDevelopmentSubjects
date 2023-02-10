/**
 * Слайс Redux для предметов
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialSubject, getSubjects} from '../initialData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const init = getSubjects('subjects');
const subjects = init !== null ? init : initialSubject;
const initialState: SubjectInit = {subjects};

export const subjectsSlice = createSlice({
	name: 'subjects',
	initialState,
	reducers: {
		updateSubjects(state, action: PayloadAction<Subjects>) {
			state.subjects = [...action.payload];
			AsyncStorage.setItem('subjects', JSON.stringify(state.subjects));
		},
		deleteItem(state, action: PayloadAction<Subject>) {
			state.subjects = [...state.subjects.filter(subject => subject.id !== action.payload.id)];
			AsyncStorage.setItem('subjects', JSON.stringify(state.subjects));
		},
	},
});

export const subjectsActions = subjectsSlice.actions;
export const subjectsReducer = subjectsSlice.reducer;
