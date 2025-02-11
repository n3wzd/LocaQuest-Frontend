declare global {
  interface GameData {
    maxLevel: number;
    expLimitList: number[];
  }

  interface Achievement {
    achvId: number;
    name: string;
    desc: string;
    progress: number;
    achievedAt: string;
  }

  interface UserStatus {
    level: number;
    exp: number;
    steps: number;
    distance: number;
    achievementList: Achievement[];
  }

  interface LoginTokenData {
    id: number;
    name: string;
  }

  type HttpResopnseCallback = (data: any, status: number) => void;
}

export {};
