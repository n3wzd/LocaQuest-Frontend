import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '@/src/styles/common';

export default ({ uri, radius = 60, onPress }: { uri: string, radius?: number, onPress?: () => void }) => {
  const ImageComponent = (
    <Image source={{ uri }} style={[styles.badgeImage, {width: radius, height: radius}]} />
  );
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      {ImageComponent}
    </TouchableOpacity>
  ) : ImageComponent;
};
