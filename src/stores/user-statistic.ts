import { create } from 'zustand';
import format from '@/src/utils/date';
import { getLevel, canLevelUp } from '@/src/utils/game';

interface UserStatisticStore {
  userStatistic: UserStatistic;
  setUserStatistic: (data: UserStatistic) => void;
  addUserStatistic: (data: UserStatistic | UserParam) => number;
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
    const { exp, steps, distance, statDate } = userStatistic;
    const newExp = exp + param.exp;
    set({ userStatistic: {
      exp: newExp,
      steps: steps + param.steps,
      distance: distance + param.distance,
      statDate: statDate
    }});
    return canLevelUp(exp, newExp) ? getLevel(newExp) : 0;
  },
  resetUserStatistic: () => set({ userStatistic: makeInitData() }),
}));

export default useUserStatusStore;
