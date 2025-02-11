import React from 'react';
import { ScrollView, View } from 'react-native';
import Badge from './badge';
import styles from '@/src/styles/common';

export default ({ badges }: { badges: { achvId: number }[] }) => {
  return (
    <View style={{ ...styles.container, alignItems: 'flex-start' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {badges.map((badge) => (
          <Badge key={badge.achvId} achvId={badge.achvId} onPress={() => console.log('Go to achievements page')} />
        ))}
      </ScrollView>
    </View>
  );
};
