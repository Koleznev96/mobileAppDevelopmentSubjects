/**
 * Компонент попапа фильтра
 */

import React, {FC, useState, useRef, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';

import {Colors} from '../../../utils/Colors';
import Blackout from '../../ui/blackout/Blackout';
import Button from '../../ui/button/Button';

export interface BlackoutPropsType {
	onPress: (status: string) => void;
	statusView: boolean;
}

const FilterPopup: FC<BlackoutPropsType> = ({onPress, statusView}) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeTop = useRef(new Animated.Value(360)).current;
	const firstUpdate = useRef(true);
	const [status, setStatus] = useState(false);

	const onAnimated = () => {
		if (statusView) setStatus(true);
		Animated.timing(fadeAnim, {
			toValue: statusView ? 1 : 0,
			duration: 350,
			useNativeDriver: true,
		}).start();
		Animated.timing(fadeTop, {
			toValue: statusView ? 0 : 360,
			duration: 350,
			useNativeDriver: true,
		}).start(() => {
			if (!statusView) setStatus(false);
		});
	};

	const filterHandler = (filter: string) => {
		onPress(filter);
	};

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
		} else {
			onAnimated();
		}
	}, [statusView]);

	if (!status) return null;

	return (
		<Blackout onPress={() => onPress('default')} animetedValue={fadeAnim} style={styles.blackout}>
			<Animated.View style={[styles.filter, {transform: [{translateY: fadeTop}]}]}>
				{['Показывать все задания', 'Выполненные', 'Не выполненные'].map((item, index) => (
					<Button
						onPress={() => filterHandler(item)}
						key={index}
						style={styles.button}
						styleLabel={index === 0 ? styles.textActive : styles.text}
						label={item}
					/>
				))}
			</Animated.View>
		</Blackout>
	);
};

const styles = StyleSheet.create({
	blackout: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	filter: {
		width: '100%',
		borderRadius: 14,
		backgroundColor: Colors.MainColor,
		paddingVertical: 8,
	},
	button: {
		paddingVertical: 16,
	},
	textActive: {
		fontSize: 16,
		color: Colors.SecondaryColor,
	},
	text: {
		fontSize: 16,
		color: '#737A82',
	},
});

export default FilterPopup;
