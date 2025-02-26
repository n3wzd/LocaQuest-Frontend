import { create } from 'zustand';

interface LevelPopupStore {
  visiblePopup: boolean;
  level: number;
  openPopup: (level: number) => void;
  closePopup: () => void;
}

const useLevelPopupStore = create<LevelPopupStore>((set) => ({
  visiblePopup: false,
  level: 0,
  openPopup: (level: number) => set({ level: level, visiblePopup: true }),
  closePopup: () => set({ visiblePopup: false }),
}));

export default useLevelPopupStore;
