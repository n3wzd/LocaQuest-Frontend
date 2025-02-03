import React from 'react';
import { View, Text } from 'react-native';
import ProfileImage from './profile-image';
import styles from '../../styles/common';

export default ({ name, imageUri }: { name: string; imageUri: string }) => {
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <ProfileImage uri={imageUri} />
      <Text style={styles.boldText}>{name}</Text>
    </View>
  );
};
