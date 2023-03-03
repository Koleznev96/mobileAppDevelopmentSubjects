import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';

const TABLE_NAME = 'subjects';

enablePromise(true);

export const getDBConnection = async () => {
	return openDatabase({name: 'todo-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
	// create table if not exists
	const query = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME}(
        title TEXT,
        description TEXT,
        status BOOLEAN DEFAULT false
      );`;

	await db.executeSql(query);
};

export const getSubjects = async (db: SQLiteDatabase): Promise<Subjects> => {
	try {
		const subjects: Subjects = [];
		const results = await db.executeSql(`SELECT rowid as id,title,description,status FROM ${TABLE_NAME}`);
		results.forEach(result => {
			for (let index = 0; index < result.rows.length; index++) {
				subjects.push({...result.rows.item(index), status: JSON.parse(result.rows.item(index).status)});
			}
		});
		return subjects;
	} catch (error) {
		console.error(error);
		throw Error('Failed to get todoItems !!!');
	}
};

export const insertSubject = async (db: SQLiteDatabase, subject: Subject) => {
	const insertQuery =
		`INSERT INTO ${TABLE_NAME}(rowid, title, description, status) values` +
		`(${subject.id}, '${subject.title}', '${subject.description}', '${subject.status}')`;

	return db.executeSql(insertQuery);
};

export const updateSubject = async (db: SQLiteDatabase, subject: Subject) => {
	const updateQuery = `UPDATE ${TABLE_NAME} SET title = '${subject.title}', description = '${subject.description}', status = '${subject.status}' WHERE rowid = ${subject.id}`;
	await db.executeSql(updateQuery);
};

export const deleteSubject = async (db: SQLiteDatabase, id: number) => {
	const deleteQuery = `DELETE from ${TABLE_NAME} where rowid = ${id}`;
	await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
	const query = `drop table ${TABLE_NAME}`;

	await db.executeSql(query);
};
