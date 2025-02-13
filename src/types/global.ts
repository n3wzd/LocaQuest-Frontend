declare global {
  interface GameData {
    maxLevel: number;
    expLimitList: number[];
  }

  interface Achievement {
    achvId: string;
    name: string;
    desc: string;
  }

  interface UserAchievement extends Achievement {
    achievedAt: string;
    progress: number;
  }

  interface UserParam {
    steps: number;
    exp: number;
    distance: number;
  }

  interface UserStatistic extends UserParam {
    userId: string;
  }

  interface UserStatus {
    userStatistic: UserStatistic;
    achievementList: UserAchievement[];
  }

  interface LoginTokenData {
    sub: string;
    name: string;
  }
}

export {};
