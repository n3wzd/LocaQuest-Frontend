import { create } from 'zustand';

interface achievementPopupStore {
  newAchvQueue: UserAchievement[];
  newAchvQueueAppend: (items: UserAchievement[]) => void;
  newAchvQueuePop: () => void;
}

const useAchievementPopupStore = create<achievementPopupStore>((set) => ({
  newAchvQueue: [],
  newAchvQueueAppend: (items) => set((state) => ({ newAchvQueue: [...state.newAchvQueue, ...items] })),
  newAchvQueuePop: () => set((state) => ({ newAchvQueue: state.newAchvQueue.slice(0, -1) })),
}));

export default useAchievementPopupStore;
