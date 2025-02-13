import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/common';
import ProgressBar from './progress-bar';
import useGameDataStore from '@/src/stores/game-data';

export default ({ level, exp }: { level: number; exp: number; }) => {
  const { gameData } = useGameDataStore();
  let gauge = null;
  let expNextTo = null;

  if(gameData) {
    const expLimit = gameData.expLimitList[level];
    const expLimitNext = gameData.expLimitList[level + 1];
    gauge = level === gameData.maxLevel ? 100 : 
        (expLimit < expLimitNext ? ((exp - expLimit) / (expLimitNext - expLimit)) * 100 : 0);
    expNextTo = expLimitNext;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Level {level}</Text>
      {gauge && <ProgressBar gauge={gauge ?? 0}/>}
      <Text style={styles.text}>
        {exp} / {expNextTo ?? 0} EXP
      </Text>
    </View>
  );
};
