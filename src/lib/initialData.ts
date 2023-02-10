import AsyncStorage from '@react-native-async-storage/async-storage';

const initialSubject: Subject[] = [];

function getSubjects(key: string) {
	let valueStr: string | null = null;
	AsyncStorage.getItem(key).then(res => {
		valueStr = res;
	});
	if (!valueStr) {
		return null;
	}
	const value = JSON.parse(valueStr);
	return value;
}

export {initialSubject, getSubjects};
