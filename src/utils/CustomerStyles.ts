import {Dimensions} from 'react-native';

export const relativeHeightPercent = (percent: number) => {
	return (percent * Dimensions.get('window').height) / 100;
};

export const relativeWidthPercent = (percent: number) => {
	return (percent * Dimensions.get('window').width) / 100;
};
