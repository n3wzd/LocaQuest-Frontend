import { create } from 'zustand';

type StoreParam = UserParam | UserStatistic;

interface UserStatisticStore {
  userStatistic: UserParam;
  setUserStatistic: (data: StoreParam) => void;
  addUserStatistic: (data: StoreParam) => void;
  resetUserStatistic: () => void;
}

const makeData = (param: StoreParam) => ({
    exp: param.exp,
    steps: param.steps,
    distance: param.distance,
  })

const useUserStatusStore = create<UserStatisticStore>((set, get) => ({
  userStatistic: { steps: 0, exp: 0, distance: 0 },
  setUserStatistic: (param: StoreParam) => {
    set({ userStatistic: makeData(param)});
  },
  addUserStatistic: (param: StoreParam) => {
    const userStatistic = get().userStatistic;
    if(userStatistic) {
      set({ userStatistic: {
        exp: userStatistic.exp + param.exp,
        steps: userStatistic.steps + param.steps,
        distance: userStatistic.distance + param.distance,
      } });
    } else {
      set({ userStatistic: makeData(param) });
    }
  },
  resetUserStatistic: () => set({ userStatistic: {steps: 0, exp: 0, distance: 0} }),
}));

export default useUserStatusStore;
