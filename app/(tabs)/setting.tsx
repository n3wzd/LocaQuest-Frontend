import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Profile from '../components/user/profile';
import Level from '../components/user/level';
import InfoBlock from '../components/user/info-block';
import BadgesList from '../components/user/badge-list';
import OngoingChallengesList from '../components/user/achievement-ongoing-list';
import axios from '../utils/axios-manager';
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
  } [];
}

const ProfileScreen = () => {
  const [data, setData] = useState<UserStatus | null>(null);
  const router = useRouter();
  const image = Asset.fromModule(require('../../assets/achievements/1.png')).uri;
  useEffect(() => {
    const init = async () => {
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
        <Profile name="John Doe" imageUri={image} />
        <Level level={5} currentExperience={data.userStatistic.totalExperience} nextExperience={12} />
        <View style={styles.infoBlockContainer}>
          <InfoBlock title="걸음수" value={data.userStatistic.totalSteps} />
          <InfoBlock title="이동거리" value={data.userStatistic.totalDistance + "m"} />
        </View>
        <BadgesList badges={[{ id: 1, image: 'https://example.com/badge.jpg' }]} />
        <OngoingChallengesList
          challenges={[
            {
              badge: 'https://example.com/badge.jpg',
              name: '첫 번째 도전',
              condition: '걸음수 10,000 이상',
              progress: 50,
            },
          ]}
        />
      </ScrollView>
    ) : (
      <View></View>
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
