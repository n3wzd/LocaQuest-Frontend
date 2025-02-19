import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('my_database.db');

export default {
    transaction: db.withTransactionSync,
    exec: db.execSync,
    select: db.getAllSync,
};
