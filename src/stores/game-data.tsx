import { create } from 'zustand';
import { setStoreGameData } from '../api/store';

interface GameDataStore {
  gameData: GameData | null;
  fetchGameData: () => void;
}

const useGameDataStore = create<GameDataStore>((set) => ({
  gameData: null,
  fetchGameData: async () => {
    const callback = (data: GameData) => { set({ gameData: data }); }
    setStoreGameData(callback);
  },
}));

export default useGameDataStore;
