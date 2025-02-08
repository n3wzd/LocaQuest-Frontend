import { create } from 'zustand';
import { UserStatus } from '../types/user-status';
import axios from '../utils/axios';
import { Router } from 'expo-router';

interface UserStatusStore {
  userStatus: UserStatus | null;
  fetchUserStatus: (router: Router) => void;
}

const useUserStatusStore = create<UserStatusStore>((set) => ({
  userStatus: null,
  fetchUserStatus: async (router) => {
    axios.post("/user-status/", {}, true)
        .then(async (response) => {
          set({ userStatus: response.data });
        })
        .catch((error) => {
          axios.handleError(error, router);
        });
  },
}));

export default useUserStatusStore;
