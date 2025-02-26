import db from '@/src/libs/sqlite';
import format from '@/src/utils/date';
import useUserStatisticStore from '@/src/stores/user-statistic';
import useAttendPopupStore from '@/src/stores/popup/attend-popup';

const TABLE_NAME = 'user_statistics';
let attendDate: string = format.getToday();

let sumAllCache: UserParam | null = null;
let dataSingleCache = new Map<string, UserStatistic>();
let dataRangeCache = new Map<string, UserStatistic[]>();
let allCache: UserStatistic[] | null = null;
const createKeyDataRangeCache = (lo: string, hi: string) => `${lo}:${hi}`;
const cleanCache = () => {
  sumAllCache = null;
  dataSingleCache = new Map();
  dataRangeCache = new Map();
  allCache = null;
}

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
  cleanCache();
}

const insertAll = (userStatisticList: UserStatistic[]) => {
  for(const item of userStatisticList) {
    insert(item);
  }
}

const selectByDate = (date: string) => {
  const cache = dataSingleCache.get(date);
  if(cache) {
    return cache;
  }
  const sql = `SELECT exp, steps, distance, stat_date AS statDate FROM ${TABLE_NAME} WHERE stat_date='${date}'`;
  const res = (db.getAllSync(sql) as UserStatistic[])[0];
  dataSingleCache.set(date, res);
  return res;
}

const selectByRange = (startDate: string, endDate: string) => {
  const cacheKey = createKeyDataRangeCache(startDate, endDate);
  const cache = dataRangeCache.get(cacheKey);
  if(cache) {
    return cache;
  }
  const sql = `SELECT exp, steps, distance, stat_date AS statDate FROM ${TABLE_NAME} 
      WHERE stat_date BETWEEN '${startDate}' AND '${endDate}' ORDER BY stat_date ASC`;
  const statList = (db.getAllSync(sql) as UserStatistic[]);

  const diff = format.getDiffDate(startDate, endDate);
  const res: UserStatistic[] = [];
  const endDateObj = new Date(endDate);
  const getSpecificDate = (day: number) => {
    const endDateObj = new Date(endDate);
    endDateObj.setDate(endDateObj.getDate() + day);
    return format.formatDate(endDateObj.toString());
  }
  for(let i = 0; i < diff; i++) {
      const day = i - diff + 1;
      const date = getSpecificDate(day);
      const item = statList.find(item => item.statDate === date);
      res.push(item ? item : { statDate: date, exp: 0, steps: 0, distance: 0 });
  }
  dataRangeCache.set(cacheKey, res);
  return res;
}

const selectAll = () => {
  if(allCache) {
    return allCache;
  }
  const sql = `SELECT exp, steps, distance, stat_date AS statDate FROM ${TABLE_NAME}`;
  return allCache = db.getAllSync(sql) as UserStatistic[];
}

const sumAll = () => {
  if(sumAllCache) {
    return sumAllCache;
  }
  const sql = `SELECT SUM(exp) as exp, SUM(steps) as steps, SUM(distance) as distance FROM ${TABLE_NAME};`;
  return sumAllCache = (db.getAllSync(sql) as UserParam[])[0];
}

const getRecentStatistic = (date: string = format.getToday()) => {
  const stat = useUserStatisticStore.getState().userStatistic;
  const dateStat = selectByDate(date);
  const sum = sumAll();
  return {
    exp: stat.exp - sum.exp + dateStat.exp,
    steps: stat.steps - sum.steps + dateStat.steps,
    distance: stat.distance - sum.distance + dateStat.distance,
    statDate: date,
  };
}

const finishDay = (date: string) => {
  insert(getRecentStatistic(date));
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
const getTodayStatistic = () => getRecentStatistic(format.getToday());

export default {
  insert: insert,
  insertAll: insertAll,
  selectAll: selectAll,
  selectByRange: selectByRange,
  setAttendDate: setAttendDate,
  updateAttend: updateAttend,
  sumAll: sumAll,
  getTodayStatistic: getTodayStatistic,
}
