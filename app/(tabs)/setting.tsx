import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Profile from '../components/user/profile';
import Level from '../components/user/level';
import InfoBlock from '../components/user/info-block';
import BadgesList from '../components/user/badge-list';
import OngoingChallengesList from '../components/user/achievement-ongoing-list';
import axios from '../utils/axios-manager';
import tokenManager from '../utils/token-manager';
import { useRouter } from 'expo-router';
import { Asset } from 'expo-asset';

interface UserStatus {
  userStatistic: {
    totalExperience: number;
    totalSteps: number;
    totalDistance: number;
  };
  achievementList: {
      achvId: number;
      name: string;
      desc: string;
      progress: number;
  } [];
}

const ProfileScreen = () => {
  const [data, setData] = useState<UserStatus | null>(null);
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();
  const userImage = Asset.fromModule(require('../../assets/achievements/1.png')).uri;
  useEffect(() => {
    const init = async () => {
      setUserName(await tokenManager.getName());
      axios.post("/user-status/", {}, true)
        .then(async (response) => {
          setData(response.data);
        })
        .catch((error) => {
          axios.handleError(error, router);
        });
    }
    init();
  }, []);

  return (
    data !== null ? (
      <ScrollView contentContainerStyle={styles.container}>
        <Profile name={userName} imageUri={userImage} />
        <Level level={5} currentExperience={data.userStatistic.totalExperience} nextExperience={12} />
        <View style={styles.infoBlockContainer}>
          <InfoBlock title="걸음수" value={data.userStatistic.totalSteps} />
          <InfoBlock title="이동거리" value={data.userStatistic.totalDistance + "m"} />
        </View>
        <BadgesList badges={ data.achievementList.filter(achv => achv.progress === 100) } />
        <OngoingChallengesList challenges={data.achievementList.filter(achv => achv.progress < 100)}/>
      </ScrollView>
    ) : (
      <View/>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  infoBlockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default ProfileScreen;
