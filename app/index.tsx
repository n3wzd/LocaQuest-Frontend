import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Login from './screens/login';
import tokenManager from './utils/token-manager';
import { useRouter } from 'expo-router';

export default () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const init = async () => {
      const t = await tokenManager.getToken();
      if (t != null) {
        router.push('/(tabs)/quest');
      }
      setLoading(true);
    };
    init();
  }, []);

  return (
    loading ? (
      <Login/>
    ) : (
      <Text>Loading...</Text>
    )
  );
}
