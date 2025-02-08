import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from '../../utils/axios';
import tokenManager from '../../utils/token';
import LoadingButton from '../../components/input/loading-button';

export default () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const checkEmailVerification = async () => {
    await axios.post("/users/register/check-verified", {email: email}, false)
      .then(async (response) => {
        await tokenManager.saveToken(response.data);
        router.push('/');
      })
      .catch((error) => {
        axios.handleError(error, router);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>거의 다왔습니다! 인증 메일을 확인해주세요!</Text>
      <LoadingButton title="확인" onPress={checkEmailVerification} />
    </View>
  );
};
