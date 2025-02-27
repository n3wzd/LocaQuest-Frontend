import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Profile from '@/src/components/status/profile';
import Level from '@/src/components/status/level';
import AchievementIconList from '@/src/components/achievement/achievement-icon-list';
import AchievementList from '@/src/components/achievement/achievement-list';
import useUserDataStore from '@/src/stores/user-data';
import useUserStatusStore from '@/src/stores/user-statistic';
import useUserAchevementStore from '@/src/stores/user-achievement';
import useLevelPopupStore from '@/src/stores/popup/profile-image-popup';
import styles from '@/src/styles/common';
import { Link } from 'expo-router';
import InfoBlockContainer from '@/src/components/status/info-block-container';

const ProfileScreen = () => {
  const { userStatistic } = useUserStatusStore();
  const { userData, profileUri } = useUserDataStore();
  const userAchvList = useUserAchevementStore.getState().getUserAchvList();
  
  return (
    userStatistic ? (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          <Profile userData={userData} profileUri={profileUri} onPress={useLevelPopupStore.getState().openPopup} />
          <Level exp={userStatistic.exp} />
          <View style={{ marginBottom: 20 }}>
            <InfoBlockContainer steps={userStatistic.steps} distance={userStatistic.distance}/>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>달성한 업적</Text>
            <Link href="../screens/achievement-catalog"><Text style={styles.text}>더보기</Text></Link>
          </View>
          <AchievementIconList achvIdList={ userAchvList.filter(achv => achv.progress === 100).map(achv => Number(achv.achvId)) } />
          <Text style={styles.boldText}>진행 중인 업적</Text>
          <AchievementList achievements={userAchvList.filter(achv => !achv.achievedAt).sort((a, b) => b.progress - a.progress).slice(0, 3)}/>
        </ScrollView>
      </View>
    ) : (
      <View/>
    )
  );
};

export default ProfileScreen;
