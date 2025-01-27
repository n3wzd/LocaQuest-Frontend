import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/home-style';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.menuText}>Map Placeholder</Text>
      </View>
    </View>
  );
}
