import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/common';
import ProgressBar from './progress-bar';
import { getLevel, getExpLimit, getExpNextTo } from '@/src/utils/game';

export default ({ exp }: { exp: number; }) => {
  const level = getLevel(exp);
  const expCurTo = getExpLimit(level);
  const expNextTo = getExpNextTo(exp);
  
  const gauge = expNextTo === 0 ? 100 : 
    (exp - expCurTo) / (exp + expNextTo) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Level {level}</Text>
      <ProgressBar gauge={gauge}/>
      <Text style={styles.text}>
        {exp} / {exp + expNextTo} EXP
      </Text>
    </View>
  );
};
