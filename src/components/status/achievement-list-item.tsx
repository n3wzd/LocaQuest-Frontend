import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import imagePaths from '@/src/config/image-paths';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';

export default ({ achievement }: { achievement: Achievement }) => {
  return (
    <View style={ listStyle.listItem }>
      <Image source={{ uri: Asset.fromModule(imagePaths[achievement.achvId]).uri }} style={styles.badgeImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{achievement.name}</Text>
        <Text style={styles.subText}>{achievement.desc}</Text>
        <Text style={styles.subText}>{achievement.progress}% 완료</Text>
      </View>
    </View>
  );
};

const listStyle = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: theme.colors.lightSpace,
        ...styles.container
    },
  });
