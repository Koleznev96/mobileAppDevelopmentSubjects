import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

export default StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: Colors.MainColor,
		flexDirection: 'column',
		alignItems: 'center',
	},
	bodyRoot: {
		flex: 1,
		backgroundColor: Colors.MainColor,
		flexDirection: 'column',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	CustomFontLite: {
		fontSize: 18,
		fontFamily: 'Inter-Lite',
		fontWeight: '300',
		color: '#fff',
	},
	CustomFontRegular: {
		fontSize: 18,
		fontFamily: 'Inter-Regular',
		fontWeight: '400',
		color: '#fff',
	},
	CustomFontMedium: {
		fontSize: 18,
		fontFamily: 'Inter-Medium',
		fontWeight: '500',
		color: '#fff',
	},
	CustomFontBold: {
		fontSize: 18,
		fontFamily: 'Inter-Bold',
		fontWeight: '700',
		color: '#fff',
	},
});
