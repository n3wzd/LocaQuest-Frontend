import { create } from 'zustand';

interface attendPopupStore {
  visiblePopup: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const useAttendPopupStore = create<attendPopupStore>((set) => ({
  visiblePopup: false,
  openPopup: () => set({ visiblePopup: true }),
  closePopup: () => set({ visiblePopup: false }),
}));

export default useAttendPopupStore;
