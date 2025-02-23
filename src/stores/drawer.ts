import { create } from 'zustand';

interface DrawerStore {
  visibleDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

const useDrawerStore = create<DrawerStore>((set) => ({
  visibleDrawer: false,
  openDrawer: () => set({ visibleDrawer: true }),
  closeDrawer: () => set({ visibleDrawer: false }),
  toggleDrawer: () => set((state) => ({ visibleDrawer: !state.visibleDrawer })),
}));

export default useDrawerStore;
