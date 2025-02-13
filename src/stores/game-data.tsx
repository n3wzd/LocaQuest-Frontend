import { create } from 'zustand';

interface GameDataStore {
  gameData: GameData | null;
  fetchGameData: (data: GameData) => void;
}

const useGameDataStore = create<GameDataStore>((set) => ({
  gameData: null,
  fetchGameData: (data: GameData) => { set({ gameData: data }); }
}));

export default useGameDataStore;
