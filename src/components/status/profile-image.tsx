import React from 'react';
import { Image } from 'react-native';
import styles from '@/src/styles/common';

export default ({ uri, radius }: { uri: string, radius: number }) => {
  return <Image source={{ uri }} style={[styles.profileImage, {width: radius, height: radius}]} />;
};
