import React from 'react';
import { View, StyleSheet } from 'react-native';
import { UserStatistic } from '../../types/user-status';
import InfoBlock from './info-block';

export default ({ userStatistic }: { userStatistic: UserStatistic }) => {
  return (
    <View style={blockStyle.blockContainer}>
        <InfoBlock title="걸음수" value={userStatistic.totalSteps} />
        <InfoBlock title="이동거리" value={userStatistic.totalDistance + "m"} />
    </View>
  );
};

const blockStyle = StyleSheet.create({
    blockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });
