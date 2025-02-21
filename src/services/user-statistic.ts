import db from '@/src/libs/sqlite';
import format from '@/src/utils/date';
import useUserStatisticStore from '@/src/stores/user-statistic';
import useAttendPopupStore from '@/src/stores/attend-popup';

const TABLE_NAME = 'user_statistics';
let attendDate: string = format.getToday();

const resetSql = `DROP TABLE IF EXISTS ${TABLE_NAME};`;
db.execSync(resetSql);

const createTableSql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
      exp INTEGER DEFAULT 0,
      steps INTEGER DEFAULT 0,
      distance INTEGER DEFAULT 0,
      stat_date DATE NOT NULL,
      PRIMARY KEY (stat_date)
    );`;
db.execSync(createTableSql);

const insert = (userStatistic: UserStatistic) => {
  const { exp, steps, distance, statDate } = userStatistic;
  const sql = `INSERT OR REPLACE INTO ${TABLE_NAME} (exp, steps, distance, stat_date)
      VALUES (${exp}, ${steps}, ${distance}, '${statDate}');`;
  db.execSync(sql);
}

const insertAll = (userStatisticList: UserStatistic[]) => {
  for(const item of userStatisticList) {
    insert(item);
  }
}

const selectByDate = (date: string) => {
  const sql = `SELECT exp, steps, distance, stat_date AS statDate FROM ${TABLE_NAME} WHERE stat_date='${date}'`;
  return (db.getAllSync(sql) as UserStatistic[])[0];
}

const selectByRange = (start_date: string, end_date: string) => {
  const sql = `SELECT exp, steps, distance, stat_date AS statDate FROM ${TABLE_NAME} 
      WHERE stat_date BETWEEN '${start_date}' AND '${end_date}' ORDER BY stat_date ASC`;
  return (db.getAllSync(sql) as UserStatistic[]);
}

const selectAll = () => {
  const sql = `SELECT exp, steps, distance, stat_date AS statDate FROM ${TABLE_NAME}`;
  return db.getAllSync(sql) as UserStatistic[];
}

const sumAll = () => {
  const sql = `SELECT SUM(exp) as exp, SUM(steps) as steps, SUM(distance) as distance FROM ${TABLE_NAME};`;
  return (db.getAllSync(sql) as UserStatistic[])[0];
}

const finishDay = (date: string) => {
  const stat = useUserStatisticStore.getState().userStatistic;
  const dateStat = selectByDate(date);
  const sum = sumAll();
  const delta: UserStatistic = {
    exp: stat.exp - sum.exp + dateStat.exp,
    steps: stat.steps - sum.steps + dateStat.steps,
    distance: stat.distance - sum.distance + dateStat.distance,
    statDate: date,
  };
  insert(delta);
  useAttendPopupStore.getState().openPopup();
}

const updateAttend = () => {
  const today = format.getToday();
  if(attendDate !== today) {
    finishDay(attendDate);
    attendDate = today;
  }
}

const setAttendDate = (date: string) => attendDate = date;

export default {
  insert: insert,
  insertAll: insertAll,
  selectAll: selectAll,
  selectByRange: selectByRange,
  setAttendDate: setAttendDate,
  updateAttend: updateAttend,
  sumAll: sumAll,
}
