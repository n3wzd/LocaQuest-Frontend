import { create } from 'zustand';

interface levelPopupStore {
  visiblePopup: boolean;
  level: number;
  openPopup: (level: number) => void;
  closePopup: () => void;
}

const useLevelPopupStore = create<levelPopupStore>((set) => ({
  visiblePopup: false,
  level: 0,
  openPopup: (level: number) => set({ level: level, visiblePopup: true }),
  closePopup: () => set({ visiblePopup: false }),
}));

export default useLevelPopupStore;
