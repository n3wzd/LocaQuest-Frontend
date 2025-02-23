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
            <ProfileImage uri={userData.profilePictureUri} radius={45}/>
            <View style={[styles.columnContainer, { paddingHorizontal: 12 }]}>
                <View style={toolbarStyles.namecard}>
                    <Text style={[styles.text]}>{userData.name}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={[styles.subText, { marginRight: 8, marginTop: 3 }]}>Lv {level}</Text>
                    <ProgressBar gauge={gauge} showValue={false} width={100}/>
                </View>
            </View>
            <InfoBlock title="걸음수" value={curStat.steps}/>
            <InfoBlock title="이동거리" value={curStat.distance}/>
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
    namecard: {
        backgroundColor: '#2c3e50', 
        padding: 3, 
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
});
