import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/common';
import ProgressBar from './progress-bar';

export default ({ level, exp, expCurTo, expNextTo }: { level: number; exp: number; expCurTo: number, expNextTo: number; }) => {
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
