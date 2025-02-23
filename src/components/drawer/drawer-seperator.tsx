import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '@/src/styles/theme';

export default () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.lightGrey,
    opacity: 0.25,
  },
});
