import React from 'react';
import { View, Text } from 'react-native';
import ProfileImage from './profile-image';
import styles from '@/src/styles/common';

export default ({ name, imageUri }: { name: string; imageUri: string }) => {
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <ProfileImage uri={imageUri} radius={80} />
      <Text style={[styles.boldText, { marginTop: 10 }]}>{name}</Text>
    </View>
  );
};
