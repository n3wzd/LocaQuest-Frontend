import React from 'react';
import { ScrollView, View } from 'react-native';
import RoundImage from '../common/round-image';
import styles from '@/src/styles/common';
import ASSET from '@/src/config/asset';

export default ({ achvIdList }: { achvIdList: number[] }) => {
  return (
    <View style={{ ...styles.container, alignItems: 'flex-start' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {achvIdList.map((achvId, idx) => (
          <View key={idx} style={{ paddingRight: 10 }}>
            <RoundImage uri={ASSET.achievements[achvId]} radius={60} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
