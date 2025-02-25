import { View, Text } from "react-native";
import AchievementTable from "@/src/components/achievement/achievement-table";
import useUserAchievementStore from '@/src/stores/user-achievement';
import styles from '@/src/styles/common';

export default () => {
    const { getUserAchvList } = useUserAchievementStore();
    const userAchvList = getUserAchvList();
    const cnt = userAchvList.filter(achv => achv.progress === 100).length ?? 0;
    return (
        <View style={{ ...styles.screen, padding: 10 }}>
            <Text style={{ ...styles.title, fontSize: 28, padding: 4 }}>업적</Text>
            <Text style={{ ...styles.text, padding: 6 }}>({cnt}/{userAchvList.length})</Text>
            <View style={{ height: '90%' }}>
                <AchievementTable achievements={userAchvList}/>
            </View>
        </View>
    );
}
