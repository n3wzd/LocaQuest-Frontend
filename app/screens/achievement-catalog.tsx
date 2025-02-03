import { View, Text } from "react-native";
import AchievementTable from "../components/status/achievement-table";
import useUserStatusStore from '../stores/user-status';
import styles from '../styles/common';

export default () => {
    const { userStatus } = useUserStatusStore();
    const cnt = userStatus?.achievementList.filter(achv => achv.progress === 100).length ?? 0;
    return (
        userStatus !== null ? (
            <View style={{ ...styles.screen, padding: 10 }}>
                <Text style={{ ...styles.title, fontSize: 28, padding: 4 }}>업적</Text>
                <Text style={{ ...styles.text, padding: 6 }}>({cnt}/{userStatus.achievementList.length})</Text>
                <View style={{ height: '90%' }}>
                    <AchievementTable achievements={userStatus.achievementList}/>
                </View>
            </View>
        ) : (
            <View/>
        )
    );
}
