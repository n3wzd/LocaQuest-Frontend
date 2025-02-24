import React from 'react';
import { View, Text } from 'react-native';
import ProfileImage from './profile-image';
import NameBox from './name-box';
import ProgressBar from './progress-bar';
import styles from '@/src/styles/common';
import { getExpProgress, getLevel } from "@/src/utils/game";

export default ({ userStatistic, userData }: { userStatistic: UserStatistic, userData: UserData }) => {
    const exp = userStatistic.exp;
    const level = getLevel(exp);
    const gauge = getExpProgress(exp);
    return (
    <View style={styles.rowContainer}>
        <ProfileImage uri={userData.profilePictureUri} radius={45}/>
        <View style={[styles.columnContainer, { paddingHorizontal: 12 }]}>
            <NameBox name={userData.name}/>
            <View style={styles.rowContainer}>
                <Text style={[styles.subText, { marginRight: 8, marginTop: 3 }]}>Lv {level}</Text>
                <ProgressBar gauge={gauge} showValue={false} width={100}/>
            </View>
        </View>
    </View>
    );
};
