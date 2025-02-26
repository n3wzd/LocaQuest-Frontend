import { create } from 'zustand';
import tokenManager from '@/src/utils/token';
import { profileImage } from '@/src/utils/server-asset';
import ASSET from '../config/asset';

interface UserDataStore {
  userData: UserData
  setUserDataFromToken: () => void
}

const useUserStatusStore = create<UserDataStore>((set) => ({
  userData: { userId: "", name: "", profileUri: ASSET.profile.default },
  setUserDataFromToken: async () => {
    const userId = await tokenManager.getUserId();
    const data = {
      userId: userId,
      name: await tokenManager.getUserName(),
      profileUri: await profileImage(Number(userId)),
    }
    set({ userData: data });
  }
}));

export default useUserStatusStore;
