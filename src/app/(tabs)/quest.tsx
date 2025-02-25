import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import Map from '@/src/components/map/map';

export default () => {
  return (
    <View style={ styles.screen }>
      <View style={{ flex: 1, padding: 0 }}>
        <Map/>
      </View>
    </View>
  );
}
/*
<View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', width: '100%', top: 12 }}>
  <View style={[styles.containerSimple, { width: '95%', height: 50, backgroundColor: theme.colors.white, zIndex: 2 }]}>
    <TouchableOpacity>
      <Text>☰</Text>
    </TouchableOpacity>
  </View>
</View>
*/
