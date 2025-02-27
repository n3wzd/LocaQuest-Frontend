import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useUserStatusStore from "@/src/stores/user-statistic";
import useUserDataStore from "@/src/stores/user-data";
import useDrawerStore from '@/src/stores/drawer';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import statDB from '@/src/services/user-statistic';
import InfoBlock from "../status/info-block";
import ProfileBar from "../status/profile-bar";

export default () => {
    const { userStatistic } = useUserStatusStore();
    const { userData, profileUri } = useUserDataStore();
    const { toggleDrawer } = useDrawerStore();
    const curStat = statDB.getTodayStatistic();

    return (
        <View style={toolbarStyles.toolbar}>
            <ProfileBar userStatistic={userStatistic} userData={userData} profileUri={profileUri} ></ProfileBar>
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
