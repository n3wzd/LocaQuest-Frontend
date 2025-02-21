import db from '@/src/libs/sqlite';
import format from '@/src/utils/date';
import GAME from '@/src/config/game';

const TABLE_NAME = 'user_achievements';

const resetSql = `DROP TABLE IF EXISTS ${TABLE_NAME};`;
db.execSync(resetSql);

const createTableSql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
      achv_id INTEGER NOT NULL,
      achieved_at DATE,
      PRIMARY KEY (achv_id)
    );`;
db.execSync(createTableSql);

const initData = () => {
  insertAll(GAME.ACHIEVEMENT.map(item => ({ achievedAt: undefined, ...item })));
}

const insert = (userAchievement: UserAchievement) => {
  const { achvId, achievedAt } = userAchievement;
  const date = achievedAt ? format.formatDate(achievedAt) : null;
  const sql = date ? `INSERT OR REPLACE INTO ${TABLE_NAME} (achv_id, achieved_at) VALUES (${achvId}, '${date}');` : 
      `INSERT OR REPLACE INTO ${TABLE_NAME} (achv_id) VALUES (${achvId});`;
  db.execSync(sql);
}

const insertAll = (userAchievementList: UserAchievement[]) => {
  for(const item of userAchievementList) {
    insert(item);
  }
}

const select = () => {
  const sql = `SELECT achv_id AS achvId, achieved_at AS achievedAt FROM ${TABLE_NAME}`;
  return db.getAllSync(sql) as UserAchievement[];
}

export default {
  initData: initData,
  insert: insert,
  insertAll: insertAll,
  select: select,
}
