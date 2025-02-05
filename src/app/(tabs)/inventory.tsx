import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from '../../styles/home';
import tokenManager from '../../utils/token-manager';
import { useRouter } from 'expo-router';

export default () => {
  const router = useRouter();
  const handleLogout = async () => {
    await tokenManager.removeToken();
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.menuText}>Inventory Placeholder</Text>
        <Button title="로그아웃" onPress={handleLogout} />
      </View>
    </View>
  );
}
