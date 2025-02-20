import { create } from 'zustand';
import { getAchievementProgress } from '@/src/utils/game';
import useUserStatusStore from '@/src/stores/user-statistic';

interface UserAchievementStoreData extends UserAchievement {
  progress: number,
}

interface UserAchievementStore {
  userAchvList: UserAchievementStoreData[];
  userAchvListAppend: (items: UserAchievement[]) => void;
}

const useUserAchievementStore = create<UserAchievementStore>((set) => ({
  userAchvList: [],
  userAchvListAppend: (items) => {
    const datas: UserAchievementStoreData[] = [];
    const stat = useUserStatusStore.getState().userStatistic;
    for(const item of items) {
      datas.push({
        progress: getAchievementProgress(Number(item.achvId), stat),
        ...item,
      });
    }
    set((state) => ({ userAchvList: [...state.userAchvList, ...datas] }))
  },
}));

export default useUserAchievementStore;
