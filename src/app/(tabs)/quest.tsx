import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/common';
import theme from '../../styles/theme';
import Map from '../../components/map/map';

export default () => {
  return (
    <View style={ styles.screen }>
      <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', width: '100%', top: 12 }}>
        <View style={[styles.container, { width: '95%', height: 50, backgroundColor: theme.colors.white, zIndex: 2 }]}>
          <TouchableOpacity>
            <Text>☰</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, padding: 0 }}>
        <Map/>
      </View>
    </View>
  );
}
