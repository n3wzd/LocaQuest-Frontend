import React from 'react';
import { View, Text } from 'react-native';
import ASSET from '@/src/config/asset';
import ProgressBar from '../status/progress-bar';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import Formater from '@/src/utils/date';
import GAME from '@/src/config/game';
import RoundImage from '../common/round-image';

export default ({ achievement }: { achievement: UserAchievementListItem }) => {
  const achvId = Number(achievement.achvId);
  const desc = GAME.ACHIEVEMENT[achvId].desc;
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.lightSpace, width: "47%", height: 240, margin: 5 }}>
      <View style={{alignItems: 'center'}}>
        <Text style={[ styles.title, { fontSize: 18 } ]}>{GAME.ACHIEVEMENT[achvId].name}</Text>
        <View style={{ margin: 15, marginBottom: 10 }}>
          <RoundImage uri={ASSET.achievements[achvId]} radius={90} />
        </View>
        <Text style={{ ...styles.text, textAlign: 'center', fontSize: desc.length < 18 ? 14 : 13, marginBottom: 10 }}>{desc}</Text>
      </View>
      {achievement.achievedAt ? (
        <View style={{alignItems: 'center'}}>
          <Text style={{ ...styles.boldText, color: theme.colors.lightCyan }}>완료!</Text>
          <Text style={ styles.subText }>{ Formater.formatDateLetter(achievement.achievedAt) } 달성</Text>
        </View>
      ) : (
        <ProgressBar gauge={achievement.progress} outline={false} />
      )}
    </View>
  );
};
