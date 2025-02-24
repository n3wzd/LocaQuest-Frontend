declare global {
  interface UserParam {
    steps: number;
    exp: number;
    distance: number;
  }

  type UserParamProperty = "exp" | "steps" | "distance";
  type DateRangeType = "week1" | "week2" | "month1" | "month3" | "month6" | "year1";

  interface Achievement {
    achvId: string;
    name: string;
    desc: string;
  }

  interface UserAchievement {
    achvId: string,
    achievedAt: string | undefined,
  }

  interface UserAchievementListItem extends UserAchievement {
    progress: number,
  }

  interface UserStatistic extends UserParam {
    statDate: string;
  }

  interface UserData {
    userId: string,
    name: string,
    profilePictureUri: string,
  }

  interface ChartDataItem {
    data: number[];
  }

  interface ChartData {
    labels: string[];
    datasets: ChartDataItem[];
  }
}

export {};
