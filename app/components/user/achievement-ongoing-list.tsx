import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OngoingChallenge from './achievement-ongoing';

const AchievementOngoingList = ({ challenges }: { challenges: { achvId: number; name: string; desc: string; progress: number }[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>진행 중인 도전 과제</Text>
      {challenges.map((challenge) => (
        <OngoingChallenge key={challenge.achvId} {...challenge} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AchievementOngoingList;
