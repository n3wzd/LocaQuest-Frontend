import { create } from 'zustand';
import tokenManager from '@/src/utils/token';
import { Asset } from 'expo-asset';

interface UserDataStore {
  userData: UserData
  setUserDataFromToken: () => void
}

const useUserStatusStore = create<UserDataStore>((set) => ({
  userData: { userId: "", name: "", profilePictureUri: "" },
  setUserDataFromToken: async () => {
    const uri = Asset.fromModule(require('@/assets/achievements/1.png')).uri;
    const data = {
      userId: await tokenManager.getUserId(),
      name: await tokenManager.getUserName(),
      profilePictureUri: uri, 
    }
    set({ userData: data });
  }
}));

export default useUserStatusStore;
