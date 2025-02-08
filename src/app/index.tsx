import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Login from './screens/login';
import tokenManager from '../utils/token';
import { startBackgroundLocation } from '../utils/location';
import { useRouter } from 'expo-router';
import useStaticDataStore from '../stores/static-data';
import LoadingButton from '../components/input/loading-button';
import styles from '../styles/common';
import { startStepCounter } from '../utils/step-counter';

export default () => {
  const [mode, setMode] = useState(0);
  const { fetchStaticData } = useStaticDataStore();
  const router = useRouter();
  
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setMode(0);
    fetchStaticData(router);
    const token = await tokenManager.getToken();
    if (token !== null) {
      await startStepCounter();
      const granted = await startBackgroundLocation();
      if(granted) {
        router.push('/(tabs)/quest');
      } else {
        setMode(2);
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
