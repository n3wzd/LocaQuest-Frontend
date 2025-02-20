import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('my_database.db');

export default db;
