interface Achievement {
  achvId: number;
  name: string;
  desc: string;
  progress: number;
}

interface UserStatistic {
  totalExperience: number;
  totalSteps: number;
  totalDistance: number;
}

interface UserStatus {
  userStatistic: UserStatistic;
  achievementList: Achievement[];
}

export { UserStatus, UserStatistic, Achievement };
