export const filterSubjects = (subjects: Subject[], filter: string) => {
	switch (filter) {
		case 'Показывать все задания':
			return subjects;
		case 'Выполненные':
			return subjects.filter(t => t.status);
		case 'Не выполненные':
			return subjects.filter(t => !t.status);
		default:
			return null;
	}
};
