interface Subject {
	id: number;
	title: string;
	description: string;
	status: boolean;
}

type Subjects = Subject[];

interface SubjectInit {
	subjects: Subjects;
}
