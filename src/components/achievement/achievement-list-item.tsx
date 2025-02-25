import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import GAME from '@/src/config/game';
import RoundImage from '../common/round-image';
import URI from '@/src/config/uri';

export default ({ achievement }: { achievement: UserAchievementListItem }) => {
  const achvId = Number(achievement.achvId);
  return (
    <View style={ listStyle.listItem }>
      <RoundImage uri={URI.achievements[achvId]} radius={60} />
      <View style={{ margin: 6 }} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.boldText, { fontSize: 14 }]}>{GAME.ACHIEVEMENT[achvId].name}</Text>
        <Text style={[styles.text, { fontSize: 12, marginTop: 2 }]}>{GAME.ACHIEVEMENT[achvId].desc}</Text>
        <Text style={[styles.subText, { marginTop: 4 }]}>{achievement.progress}% 완료</Text>
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
