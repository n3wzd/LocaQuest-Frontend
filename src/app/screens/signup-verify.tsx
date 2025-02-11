import React from 'react';
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import LoadingButton from '@/src/components/input/loading-button';
import { registerCheckVerified } from '@/src/api/user';

export default () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const checkEmailVerification = async () => {
    registerCheckVerified(email as string, router);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>거의 다왔습니다! 인증 메일을 확인해주세요!</Text>
      <LoadingButton title="확인" onPress={checkEmailVerification} />
    </View>
  );
};
