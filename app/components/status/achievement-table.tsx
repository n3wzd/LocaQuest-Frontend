import { FlatList } from "react-native";
import AchievementTableItem from "./achievement-table-item";
import { Achievement } from "../../types/user-status";

export default ({ achievements }: { achievements: Achievement[] }) => {
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
