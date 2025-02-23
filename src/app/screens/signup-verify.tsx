import React from 'react';
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import LoadingButton from '@/src/components/input/loading-button';
import { registerCheckVerified } from '@/src/api/user';
import styles from '@/src/styles/form';

export default () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const checkEmailVerification = async () => {
    registerCheckVerified(email as string, router);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 18, marginBottom: 20 }]}>
        거의 다왔습니다! 인증 메일을 확인해주세요!
        </Text>
        <LoadingButton title="확인" onPress={checkEmailVerification} />
      </View>
    </View>
  );
};
