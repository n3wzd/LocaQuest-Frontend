import React from 'react';
import { Image } from 'react-native';
import styles from '@/src/styles/common';

export default ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={[styles.profileImage, {width: 80, height: 80}]} />;
};
