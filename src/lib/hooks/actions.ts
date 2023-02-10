import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {subjectsActions} from '../redux/subjects.slice';

const actions = {
	...subjectsActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
