import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/common';
import ProgressBar from './progress-bar';
import useStaticDataStore from '@/src/stores/static-data';

const Level = ({ level, exp }: { level: number; exp: number; }) => {
  const { staticData } = useStaticDataStore();
  let gauge = null;
  let expNextTo = null;

  if(staticData) {
    const expLimit = staticData.expLimitList[level];
    const expLimitNext = staticData.expLimitList[level + 1];
    console.log(expLimit);
    console.log(expLimitNext);
    gauge = level === staticData.maxLevel ? 100 : 
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

export default Level;
