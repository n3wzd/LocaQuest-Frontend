import React from 'react';
import { View } from 'react-native';
import RoundImage from '../common/round-image';
import styles from '@/src/styles/common';
import NameBox from './name-box';

export default ({ name, imageUri }: { name: string; imageUri: string }) => {
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <RoundImage uri={imageUri} radius={90} />
      <View style={{ paddingTop: 16, width: '70%' }}>
        <NameBox name={name} bold={true} padding={6}/>
      </View>
    </View>
  );
};
