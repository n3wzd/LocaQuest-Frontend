import { create } from 'zustand';

interface ProfileImagePopupStore {
  visiblePopup: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const useLevelPopupStore = create<ProfileImagePopupStore>((set) => ({
  visiblePopup: false,
  openPopup: () => set({ visiblePopup: true }),
  closePopup: () => set({ visiblePopup: false }),
}));

export default useLevelPopupStore;
