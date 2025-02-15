import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/common';
import ProgressBar from './progress-bar';

export default ({ level, exp, expCurTo, expNextTo }: { level: number; exp: number; expCurTo: number, expNextTo: number; }) => {
  const gauge = expNextTo === 0 ? 100 : 
    (expCurTo < expNextTo ? ((exp - expCurTo) / (expNextTo - expCurTo)) * 100 : 0);

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
