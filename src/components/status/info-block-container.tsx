import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import InfoBlock from './info-block';

const { width } = Dimensions.get("window");

export default ({ steps, distance }: { steps: number, distance: number }) => {
  const blockWidth = width * 0.45;
  return (
    <View style={blockStyle.blockContainer}>
        <InfoBlock title="걸음수" value={steps} width={blockWidth} />
        <InfoBlock title="이동거리" value={distance + "m"} width={blockWidth} />
    </View>
  );
};

const blockStyle = StyleSheet.create({
    blockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });
