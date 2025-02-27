import { create } from 'zustand';
import ASSET from '../config/asset';

interface UserDataStore {
  userData: UserData;
  profileUri: string;
  setUserData: (userData: UserData) => void;
  setProfileUri: (uri: string) => void;
}

const useUserStatusStore = create<UserDataStore>((set) => ({
  userData: { userId: "", name: "" },
  profileUri: ASSET.profile.default,
  setUserData: (userData) => set({ userData: userData }),
  setProfileUri: (uri) => set({ profileUri: uri }),
}));

export default useUserStatusStore;
