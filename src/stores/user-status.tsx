import { create } from 'zustand';
import { setStoreUserStatus } from '../api/store';
import { Router } from 'expo-router';

interface UserStatusStore {
  userStatus: UserStatus | null;
  fetchUserStatus: (router: Router) => void;
}

const useUserStatusStore = create<UserStatusStore>((set) => ({
  userStatus: null,
  fetchUserStatus: async (router) => {
    const callback = (data: UserStatus) => { set({ userStatus: data }); }
    setStoreUserStatus(callback, router);
  },
}));

export default useUserStatusStore;
