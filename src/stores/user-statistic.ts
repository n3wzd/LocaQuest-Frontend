import { create } from 'zustand';
import format from '@/src/utils/date';

interface UserStatisticStore {
  userStatistic: UserStatistic;
  setUserStatistic: (data: UserStatistic) => void;
  addUserStatistic: (data: UserStatistic | UserParam) => void;
  resetUserStatistic: () => void;
}

const makeInitData = () => ({ steps: 0, exp: 0, distance: 0, statDate: format.getToday() })

const useUserStatusStore = create<UserStatisticStore>((set, get) => ({
  userStatistic: makeInitData(),
  setUserStatistic: (param: UserStatistic) => {
    set({ userStatistic: param});
  },
  addUserStatistic: (param: UserStatistic | UserParam) => {
    const userStatistic = get().userStatistic;
    set({ userStatistic: {
      exp: userStatistic.exp + param.exp,
      steps: userStatistic.steps + param.steps,
      distance: userStatistic.distance + param.distance,
      statDate: userStatistic.statDate
    }});
  },
  resetUserStatistic: () => set({ userStatistic: makeInitData() }),
}));

export default useUserStatusStore;
