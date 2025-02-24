import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/common';

export default ({ title, value, width }: { title: string, value: string | number, width?: number }) => {
  return (
    <View style={[styles.containerBlock, { alignItems: 'center', paddingHorizontal: 10, width: width }]}>
      <Text style={{ ...styles.boldText, marginBottom: 2 }}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};
