import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Profile from '../components/status/profile';
import Level from '../components/status/level';
import BadgesList from '../components/status/badge-list';
import AchievementList from '../components/status/achievement-list';
import tokenManager from '../utils/token-manager';
import useUserStatusStore from '../stores/user-status';
import styles from '../styles/common';
import { Link, useRouter } from 'expo-router';
import { Asset } from 'expo-asset';
import InfoBlockContainer from '../components/status/info-block-container';

const ProfileScreen = () => {
  const { userStatus, fetchUserStatus } = useUserStatusStore();
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const userImage = Asset.fromModule(require('../../assets/achievements/1.png')).uri;

  useEffect(() => {
    const init = async () => {
      fetchUserStatus(router);
      setUserName(await tokenManager.getName());
    }
    init();
  }, []);

  return (
    userStatus !== null ? (
      <ScrollView contentContainerStyle={styles.screen}>
        <Profile name={userName} imageUri={userImage} />
        <Level level={5} currentExperience={userStatus.userStatistic.totalExperience} nextExperience={12} />
        <View style={{ marginBottom: 20 }}>
          <InfoBlockContainer userStatistic={userStatus.userStatistic}/>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.boldText}>달성한 업적</Text>
          <Link href="../screens/achievement-catalog"><Text style={styles.text}>더보기</Text></Link>
        </View>
        <BadgesList badges={ userStatus.achievementList.filter(achv => achv.progress === 100) } />
        <Text style={styles.boldText}>진행 중인 업적</Text>
        <AchievementList achievements={userStatus.achievementList.filter(achv => achv.progress < 100).sort((a, b) => b.progress - a.progress).slice(0, 3)}/>
      </ScrollView>
    ) : (
      <View/>
    )
  );
};

export default ProfileScreen;
