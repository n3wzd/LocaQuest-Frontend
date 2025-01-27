// ProfileScreen.tsx
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Profile from '../components/user/profile';
import Level from '../components/user/level';
import InfoBlock from '../components/user/info-block';
import BadgesList from '../components/user/badge-list';
import OngoingChallengesList from '../components/user/achievement-ongoing-list';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Profile name="John Doe" imageUri="https://example.com/profile.jpg" />
      <Level level={5} currentExperience={120} nextExperience={200} />
      <View style={styles.infoBlockContainer}>
        <InfoBlock title="걸음수" value="10,000" />
        <InfoBlock title="이동거리" value="8.5 km" />
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
