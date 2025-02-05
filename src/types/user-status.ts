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

export { UserStatus, Achievement };
