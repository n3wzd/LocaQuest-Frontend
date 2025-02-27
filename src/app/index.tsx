import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Login from '@/src/app/screens/login';
import { useRouter } from 'expo-router';
import LoadingButton from '@/src/components/input/loading-button';
import styles from '@/src/styles/common';
import initialize from '@/src/services/init';

export default () => {
  const [mode, setMode] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setMode(0);
    const res = await initialize();
    switch(res) {
      case 'success': router.push('/(tabs)/quest'); break;
      case 'not-granted': setMode(2); break;
      default: setMode(1);
    }
  };

  switch (mode) {
    case 1:
      return (
        <Login/>
      );
    case 2:
      return (
        <View style={[ styles.screen, { justifyContent: 'center', alignItems: 'center' } ]}>
          <Text style={[ styles.text, { marginBottom: 15 } ]}>위치 권한이 필요합니다. 앱 설정에서 권한을 설정해주세요.</Text>
          <LoadingButton onPress={init} title={'시작'}></LoadingButton>
        </View>
      );
    default:
      return (
        <Text>Loading...</Text>
      );
  };
}
