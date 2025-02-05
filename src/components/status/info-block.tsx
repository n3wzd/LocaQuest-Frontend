import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/common';
import theme from '../../styles/theme';

export default ({ title, value }: { title: string; value: string | number }) => {
  return (
    <View style={blockStyle.block}>
      <Text style={{ ...styles.boldText, marginBottom: 2 }}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const blockStyle = StyleSheet.create({
    block: {
        width: '48%',
        backgroundColor: theme.colors.lightSpace,
        alignItems: 'center',
        ...styles.container
    },
  });
