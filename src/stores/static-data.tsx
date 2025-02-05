import { create } from 'zustand';
import StaticData from '../types/static-data';
import axios from '../utils/axios-manager';
import { Router } from 'expo-router';

interface StaticDataStore {
  staticData: StaticData | null;
  fetchStaticData: (router: Router) => void;
}

const useStaticDataStore = create<StaticDataStore>((set) => ({
  staticData: null,
  fetchStaticData: async (router) => {
    axios.post("/update/", {}, false)
        .then(async (response) => {
          set({ staticData: response.data });
        })
        .catch((error) => {
          axios.handleError(error, router);
        });
  },
}));

export default useStaticDataStore;
