import db from '@/src/libs/sqlite';

const TABLE_NAME = 'user_achievements';

const createTableSql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
      achv_id INTEGER NOT NULL,
      achieved_at TIMESTAMP NOT NULL,
      PRIMARY KEY (achv_id)
    );`;
db.execSync(createTableSql);
  
const insert = (userAchievement: UserAchievement) => {
  const { achvId, achievedAt } = userAchievement;
  const sql = `INSERT OR REPLACE INTO ${TABLE_NAME} (achv_id, achieved_at)
      VALUES (${achvId}, ${achievedAt});`;
  db.execSync(sql);
}

const insertAll = (userAchievementList: UserAchievement[]) => {
  for(const item of userAchievementList) {
    insert(item);
  }
}

const select = () => {
  const sql = `SELECT * FROM ${TABLE_NAME}`;
  return db.getAllSync(sql) as UserAchievement[];
}

export default {
  insert: insert,
  insertAll: insertAll,
  select: select,
}
