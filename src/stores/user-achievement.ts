import { create } from 'zustand';
import { getAchievementProgress } from '@/src/utils/game';
import useUserStatusStore from '@/src/stores/user-statistic';
import achvDB from '@/src/services/user-achievement';

interface UserAchievementStoreData extends UserAchievement {
  progress: number,
}

interface UserAchievementStore {
  userAchvMap: Map<string, UserAchievementStoreData>;
  initAchvMapFromDB: () => void;
  updateAchvMapProgress: () => void;
  addAchvMapAchvDate: (items: UserAchievement[]) => void;
  getUserAchvList: () => UserAchievementStoreData[];
  resetUserAchvMap: () => void;
}

const useUserAchievementStore = create<UserAchievementStore>((set, get) => ({
  userAchvMap: new Map(),
  initAchvMapFromDB: () => {
    const userAchvList = achvDB.select();
    const datas = get().userAchvMap;
    const stat = useUserStatusStore.getState().userStatistic;
    for(const item of userAchvList) {
      datas.set(item.achvId, {
        progress: getAchievementProgress(Number(item.achvId), stat),
        ...item
      });
    }
    set(({ userAchvMap: datas }));
  },
  updateAchvMapProgress: () => {
    const datas = get().userAchvMap;
    const stat = useUserStatusStore.getState().userStatistic;
    for(const item of datas.values()) {
      datas.set(item.achvId, {
        progress: getAchievementProgress(Number(item.achvId), stat),
        achvId: item.achvId,
        achievedAt: item.achievedAt,
      });
    }
    set(({ userAchvMap: datas }));
  },
  addAchvMapAchvDate: (items) => {
    const datas = get().userAchvMap;
    const stat = useUserStatusStore.getState().userStatistic;
    for(const item of items) {
      datas.set(item.achvId, {
        progress: getAchievementProgress(Number(item.achvId), stat),
        ...item,
      });
    }
    set(({ userAchvMap: datas }));
  },
  getUserAchvList: () => [...get().userAchvMap.values()],
  resetUserAchvMap: () => set(() => ({ userAchvMap: new Map() })),
}));

export default useUserAchievementStore;
