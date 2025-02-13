import { FlatList } from "react-native";
import AchievementTableItem from "./achievement-table-item";

export default ({ achievements }: { achievements: UserAchievement[] }) => {
  return (
    <FlatList
      data={achievements}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <AchievementTableItem achievement={item} />
      )}
    />
  );
}
