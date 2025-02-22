import React from 'react';
import { View, Text, Image } from 'react-native';
import { Asset } from 'expo-asset';
import imagePaths from '@/src/config/image-paths';
import ProgressBar from './progress-bar';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import Formater from '@/src/utils/date';
import GAME from '@/src/config/game';

export default ({ achievement }: { achievement: UserAchievementListItem }) => {
  const achvId = Number(achievement.achvId);
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.lightSpace, width: "47%", height: 240, margin: 5 }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{ ...styles.title, marginBottom: 10 }}>{GAME.ACHIEVEMENT[achvId].name}</Text>
        <Image source={{ uri: Asset.fromModule(imagePaths[Number(achievement.achvId)]).uri }} style={{ ...styles.badgeImage, width: 90, height: 90, margin: 15 }} />
        <Text style={{ ...styles.text, marginBottom: 10 }}>{GAME.ACHIEVEMENT[achvId].desc}</Text>
      </View>
      {achievement.achievedAt ? (
        <View style={{alignItems: 'center'}}>
          <Text style={{ ...styles.boldText, color: theme.colors.lightCyan }}>완료!</Text>
          <Text style={ styles.subText }>{ Formater.formatDateLetter(achievement.achievedAt) } 달성</Text>
        </View>
      ) : (
        <ProgressBar gauge={achievement.progress} />
      )}
    </View>
  );
};
