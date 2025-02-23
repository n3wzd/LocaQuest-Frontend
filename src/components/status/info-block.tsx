import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';

export default ({ title, value, width }: { title: string, value: string | number, width?: number }) => {
  return (
    <View style={[blockStyle.block, { width: width }]}>
      <Text style={{ ...styles.boldText, marginBottom: 2 }}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const blockStyle = StyleSheet.create({
    block: {
      ...styles.container,
      backgroundColor: theme.colors.lightSpace,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
  });
