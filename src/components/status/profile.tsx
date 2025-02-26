import React from 'react';
import { View } from 'react-native';
import RoundImage from '../common/round-image';
import styles from '@/src/styles/common';
import NameBox from './name-box';

export default ({ userData, onPress }: { userData: UserData, onPress?: () => void }) => {
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <RoundImage uri={userData.profileUri} radius={90} onPress={onPress} />
      <View style={{ paddingTop: 16, width: '70%' }}>
        <NameBox name={userData.name} bold={true} padding={6}/>
      </View>
    </View>
  );
};
