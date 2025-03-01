import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';

export default ({ uri, radius = 60, onPress }: { uri: string, radius?: number, onPress?: () => void }) => {
  const ImageComponent = (
    <Image source={{ uri }} style={[styles.badgeImage, {width: radius, height: radius, backgroundColor: theme.colors.white }]} />
  );
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      {ImageComponent}
    </TouchableOpacity>
  ) : ImageComponent;
};
