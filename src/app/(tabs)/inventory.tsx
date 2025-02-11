import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from '@/src/styles/common';
import tokenManager from '@/src/utils/token';
import { useRouter } from 'expo-router';

export default () => {
  const router = useRouter();
  const handleLogout = async () => {
    await tokenManager.removeToken();
    router.push('/');
  }

  return (
    <View style={styles.screen}>
      <View>
        <TouchableOpacity style={styles.container}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Inventory Placeholder</Text>
        <Button title="로그아웃" onPress={handleLogout} />
      </View>
    </View>
  );
}
