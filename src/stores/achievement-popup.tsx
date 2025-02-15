import { create } from 'zustand';

interface achievementPopupStore {
  newAchvQueue: number[];
  newAchvQueueAppend: (items: number[]) => void;
  newAchvQueuePop: () => void;
}

const useAchievementPopupStore = create<achievementPopupStore>((set) => ({
  newAchvQueue: [],
  newAchvQueueAppend: (items) => set((state) => ({ newAchvQueue: [...state.newAchvQueue, ...items] })),
  newAchvQueuePop: () => set((state) => ({ newAchvQueue: state.newAchvQueue.slice(0, -1) })),
}));

export default useAchievementPopupStore;
