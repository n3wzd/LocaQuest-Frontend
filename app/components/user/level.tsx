import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Level = ({ level, currentExperience, nextExperience }: { level: number; currentExperience: number; nextExperience: number }) => {
  const progressBarWidth = (currentExperience / nextExperience) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.level}>Level {level}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressBarFill, { width: `${progressBarWidth}%` }]} />
      </View>
      <Text style={styles.experienceText}>
        {currentExperience} / {nextExperience} EXP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginVertical: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  experienceText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Level;
