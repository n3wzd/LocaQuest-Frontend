import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import imagePaths from '@/src/config/image-paths';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import GAME from '@/src/config/game';

export default ({ achievement }: { achievement: UserAchievementListItem }) => {
  const achvId = Number(achievement.achvId);
  return (
    <View style={ listStyle.listItem }>
      <Image source={{ uri: Asset.fromModule(imagePaths[achvId]).uri }} style={styles.badgeImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{GAME.ACHIEVEMENT[achvId].name}</Text>
        <Text style={styles.subText}>{GAME.ACHIEVEMENT[achvId].desc}</Text>
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
