import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AchievementOngoing = ({ badge, name, condition, progress }: { badge: string; name: string; condition: string; progress: number }) => {
  return (
    <View style={styles.challengeBlock}>
      <Image source={{ uri: badge }} style={styles.challengeBadge} />
      <View style={styles.challengeDetails}>
        <Text style={styles.challengeName}>{name}</Text>
        <Text style={styles.challengeCondition}>{condition}</Text>
        <Text style={styles.challengeProgress}>{progress}% 완료</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  challengeBlock: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  challengeBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  challengeDetails: {
    flex: 1,
  },
  challengeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  challengeCondition: {
    fontSize: 14,
    color: '#555',
  },
  challengeProgress: {
    fontSize: 14,
    color: '#4caf50',
  },
});

export default AchievementOngoing;
