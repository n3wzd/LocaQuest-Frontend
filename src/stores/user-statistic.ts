import { create } from 'zustand';
import { getLevel, getExpLimit, getExpNextTo } from '@/src/utils/game';

type StoreParam = UserParam | UserStatistic;

interface UserStatisticStoreData extends UserParam {
  level: number;
  expCurTo: number;
  expNextTo: number;
}

interface UserStatisticStore {
  userStatistic: UserStatisticStoreData;
  setUserStatistic: (data: StoreParam) => void;
  addUserStatistic: (data: StoreParam) => void;
}

const makeData = (param: StoreParam): UserStatisticStoreData => {
  const level = getLevel(param.exp);
  return {
    steps: param.steps,
    distance: param.distance,
    exp: param.exp,
    level: level,
    expCurTo: getExpLimit(level),
    expNextTo: getExpNextTo(param.exp),
  }
}

const useUserStatusStore = create<UserStatisticStore>((set, get) => ({
  userStatistic: makeData({ steps: 0, exp: 0, distance: 0 }),
  setUserStatistic: (param: StoreParam) => {
    set({ userStatistic: makeData(param) })
  },
  addUserStatistic: (param: StoreParam) => {
    const userStatistic = get().userStatistic;
    if(userStatistic) {
      set({ userStatistic: makeData({
        exp: userStatistic.exp + param.exp,
        steps: userStatistic.steps + param.steps,
        distance: userStatistic.distance + param.distance,
      }) });
    } else {
      set({ userStatistic: makeData(param) });
    }
  },
}));

export default useUserStatusStore;
