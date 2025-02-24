import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ProfileImage from "../status/profile-image";
import Ionicons from "react-native-vector-icons/Ionicons";
import useUserStatusStore from "@/src/stores/user-statistic";
import useUserDataStore from "@/src/stores/user-data";
import useDrawerStore from '@/src/stores/drawer';
import { getExpProgress, getLevel } from "@/src/utils/game";
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import ProgressBar from "../status/progress-bar";
import statDB from '@/src/services/user-statistic';
import InfoBlock from "../status/info-block";
import NameBox from "../status/name-box";
import ProfileBar from "../status/profile-bar";

export default () => {
    const { userStatistic } = useUserStatusStore();
    const { userData } = useUserDataStore();
    const exp = userStatistic.exp;
    const level = getLevel(exp);
    const gauge = getExpProgress(exp);
    const { toggleDrawer } = useDrawerStore();
    const curStat = statDB.getTodayStatistic();

    return (
        <View style={toolbarStyles.toolbar}>
            <ProfileBar userStatistic={userStatistic} userData={userData} ></ProfileBar>
            <InfoBlock title="걸음수" value={curStat.steps}/>
            <InfoBlock title="이동거리" value={`${curStat.distance}m`}/>
            <TouchableOpacity onPress={toggleDrawer}>
                <Ionicons name="settings" size={28} color={theme.colors.lightCyan} />
            </TouchableOpacity>
        </View>
    );
};

const toolbarStyles = StyleSheet.create({
    toolbar: {
        ...styles.rowContainer,
        paddingHorizontal: 6,
        backgroundColor: theme.colors.lightSpace,
        justifyContent: "flex-start"
    },
});
