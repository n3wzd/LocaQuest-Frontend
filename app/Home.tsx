import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles/HomeStyle';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholder}>Map Placeholder</Text>
      </View>

      <Link href="/screens/SignUp">가입</Link>
    </View>
  );
}
