import React from 'react';
import { ScrollView, View } from 'react-native';
import Badge from './badge';
import styles from '@/src/styles/common';

export default ({ achvIdList }: { achvIdList: number[] }) => {
  return (
    <View style={{ ...styles.container, alignItems: 'flex-start' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {achvIdList.map((achvId) => (
          <Badge key={achvId} achvId={achvId} onPress={() => console.log('Go to achievements page')} />
        ))}
      </ScrollView>
    </View>
  );
};
