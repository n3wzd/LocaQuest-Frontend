import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoBlock from './info-block';

export default ({ steps, distance }: { steps: number, distance: number }) => {
  return (
    <View style={blockStyle.blockContainer}>
        <InfoBlock title="걸음수" value={steps} />
        <InfoBlock title="이동거리" value={distance + "m"} />
    </View>
  );
};

const blockStyle = StyleSheet.create({
    blockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });
