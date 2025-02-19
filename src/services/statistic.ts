import db from '@/src/libs/sqlite';

const TABLE_NAME = 'user_statistics';

db.transaction(async () => {
    const sql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        exp INTEGER DEFAULT 0,
        steps INTEGER DEFAULT 0,
        distance INTEGER DEFAULT 0,
        stat_date DATE NOT NULL,
        PRIMARY KEY (stat_date)
      );`;
    db.exec(sql);
  });

const insert = (userStatistic: UserStatistic) => {
  const { exp, steps, distance, statDate } = userStatistic;
  const sql = `INSERT OR REPLACE INTO ${TABLE_NAME} (exp, steps, distance, stat_date)
      VALUES (${exp}, ${steps}, ${distance}, ${statDate});`;
  db.exec(sql);
}

const insertAll = (userStatisticList: UserStatistic[]) => {
  for(const stat of userStatisticList) {
    insert(stat);
  }
}

const select = () => {
  const sql = 'SELECT * FROM ${TABLE_NAME}';
  return db.select(sql) as UserStatistic[];
}

export default {
  insert: insert,
  insertAll: insertAll,
  select: select,
}
