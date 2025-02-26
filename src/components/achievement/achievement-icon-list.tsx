import React from 'react';
import { ScrollView, View } from 'react-native';
import RoundImage from '../common/round-image';
import styles from '@/src/styles/common';
import ASSET from '@/src/config/asset';

export default ({ achvIdList }: { achvIdList: number[] }) => {
  return (
    <View style={{ ...styles.container, alignItems: 'flex-start' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {achvIdList.map((achvId) => (
          <RoundImage key={achvId} uri={ASSET.achievements[achvId]} />
        ))}
      </ScrollView>
    </View>
  );
};
