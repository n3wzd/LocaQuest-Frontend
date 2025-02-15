import { create } from 'zustand';

interface UserStatusStore {
  userStatus: UserStatus | null;
  fetchUserStatus: (data: UserStatus) => void;
}

const useUserStatusStore = create<UserStatusStore>((set) => ({
  userStatus: null,
  fetchUserStatus: (data: UserStatus) => set({ userStatus: data }),
}));

export default useUserStatusStore;
