import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
import tokenManager from '../utils/token-manager';

export default () => {
  const [clickMessage, setClickMessage] = useState<string>("");
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const checkEmailVerification = async () => {
    setClickMessage("확인 중...");
    axios
      .post(API_URL + "/users/update-password/check-verified", email)
      .then(async (response) => {
        router.push({
          pathname: '/screens/find-password-update',
          params: { email: email },
        });
      })
      .catch((error) => {
        setClickMessage("이메일이 인증되지 않았습니다.");
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        인증 메일을 확인해주세요!
      </Text>

      <Button title="인증 메일 확인" onPress={checkEmailVerification} />
      <>
        {clickMessage !== "" && (
          <Text style={{ color: 'red', fontSize: 16 }}>{clickMessage}</Text>
        )}
      </>
    </View>
  );
};
