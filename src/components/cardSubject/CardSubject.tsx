/**
 * Компонент элемента списка предметов
 */

import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle, Text} from 'react-native';

import GlobalStyle from '../GlobalStyle';
import Button from '../ui/button/Button';
import SubjectActiveSvg from '../../assets/icons/SubjectActive.svg';
import SubjectDefaultSvg from '../../assets/icons/SubjectDefault.svg';
import SubjectDeleteSvg from '../../assets/icons/SubjectDelete.svg';
import {Colors} from '../../utils/Colors';

interface CardPropsType {
	style?: StyleProp<ViewStyle>;
	updateSubjects: (data: Subject) => void;
	deleteCard: (data: Subject) => void;
	data: Subject;
}

const CardSubject = ({style, updateSubjects, deleteCard, data}: CardPropsType) => {
	const updateStatus = () => {
		updateSubjects(data);
	};

	const deleteHandler = () => {
		deleteCard(data);
	};

	return (
		<View style={[styles.card, style]}>
			<View style={styles.wrapper}>
				<Button style={styles.buttonStatus} onPress={updateStatus}>
					{data.status ? <SubjectActiveSvg /> : <SubjectDefaultSvg />}
				</Button>
				<View style={styles.cardContent}>
					<Text style={[GlobalStyle.CustomFontMedium, styles.cardLabel]}>{data.title}</Text>
					<Text
						style={[
							GlobalStyle.CustomFontRegular,
							styles.cardDescription,
							data.status ? styles.cardDescriptionCrossedOut : null,
						]}
					>
						{data.description}
					</Text>
				</View>
			</View>
			<Button style={styles.buttonDelete} onPress={deleteHandler}>
				<SubjectDeleteSvg />
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
		marginVertical: 10.5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: 1,
		paddingRight: 12,
	},
	buttonStatus: {
		marginRight: 20,
		width: 40,
		height: 40,
	},
	cardContent: {
		flex: 1,
	},
	cardLabel: {
		marginBottom: 2,
		fontSize: 17,
		color: Colors.PrimaryColor,
	},
	cardDescription: {
		fontSize: 13,
		color: Colors.PrimaryColor,
	},
	cardDescriptionCrossedOut: {
		textDecorationLine: 'line-through',
	},
	buttonDelete: {
		width: 40,
		height: 40,
	},
});

export default CardSubject;
