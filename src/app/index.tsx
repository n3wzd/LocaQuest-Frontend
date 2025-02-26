import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Login from '@/src/app/screens/login';
import tokenManager from '@/src/utils/token';
import useUserDataStore from '@/src/stores/user-data';
import { startBackgroundLocation } from '@/src/services/location';
import { useRouter } from 'expo-router';
import LoadingButton from '@/src/components/input/loading-button';
import styles from '@/src/styles/common';
import { startStepCounter } from '@/src/services/step-counter';
import { startApi } from '@/src/api/init';

export default () => {
  const [mode, setMode] = useState(0);
  const router = useRouter();
  const { setUserDataFromToken } = useUserDataStore();
  
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setMode(0);
    const token = await tokenManager.getToken();
    if (token !== null) {
      if(await startApi()) {
        await startStepCounter();
        const granted = await startBackgroundLocation();
        if(granted) {
          await setUserDataFromToken();
          router.push('/(tabs)/quest');
        } else {
          setMode(2);
        }
      } else {
        setMode(1);
      }
    } else {
      setMode(1);
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
