import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
	containerHeader: {
		width: '100%',
		height: 65,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	goBack: {
		width: 40,
		height: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		position: 'absolute',
		top: 65,
		left: 0,
		right: 0,
		bottom: 0,
	},
	marker: {
		// width: 100,
		// height: 100,
		// backgroundColor: '#FFF',
		top: -2,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1000,
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	options: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
});
