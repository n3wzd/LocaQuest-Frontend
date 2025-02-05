import React from 'react';
import { View } from 'react-native';
import AchievementListItem from './achievement-list-item';
import { Achievement } from '../../types/user-status';

export default ({ achievements }: { achievements: Achievement[] }) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      {achievements.map((achievement) => (
        <AchievementListItem key={achievement.achvId} achievement={achievement} />
      ))}
    </View>
  );
};
