import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Profile from '@/src/components/status/profile';
import Level from '@/src/components/status/level';
import BadgesList from '@/src/components/status/badge-list';
import AchievementList from '@/src/components/status/achievement-list';
import tokenManager from '@/src/utils/token';
import useUserStatusStore from '@/src/stores/user-status';
import styles from '@/src/styles/common';
import { Link } from 'expo-router';
import { Asset } from 'expo-asset';
import InfoBlockContainer from '@/src/components/status/info-block-container';

const ProfileScreen = () => {
  const { userStatus } = useUserStatusStore();
  const [userName, setUserName] = useState<string>("");
  const userImage = Asset.fromModule(require('@/assets/achievements/1.png')).uri;

  useEffect(() => {
    const init = async () => {
      setUserName(await tokenManager.getUserName());
    }
    init();
  }, []);

  return (
    userStatus !== null ? (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          <Profile name={userName} imageUri={userImage} />
          <Level level={userStatus.level} exp={userStatus.exp} expCurTo={userStatus.expCurTo} expNextTo={userStatus.expNextTo} />
          <View style={{ marginBottom: 20 }}>
            <InfoBlockContainer steps={userStatus.steps} distance={userStatus.distance}/>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>달성한 업적</Text>
            <Link href="../screens/achievement-catalog"><Text style={styles.text}>더보기</Text></Link>
          </View>
          <BadgesList achvIdList={ userStatus.achievementList.filter(achv => achv.progress === 100).map(achv => Number(achv.achvId)) } />
          <Text style={styles.boldText}>진행 중인 업적</Text>
          <AchievementList achievements={userStatus.achievementList.filter(achv => !achv.achievedAt).sort((a, b) => b.progress - a.progress).slice(0, 3)}/>
        </ScrollView>
      </View>
    ) : (
      <View/>
    )
  );
};

export default ProfileScreen;
