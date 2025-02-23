import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/common';
import ProgressBar from './progress-bar';
import { getLevel, getExpNextTo, getExpProgress } from '@/src/utils/game';

export default ({ exp }: { exp: number; }) => {
  const level = getLevel(exp);
  const expNextTo = getExpNextTo(exp);
  const gauge = getExpProgress(exp);

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
