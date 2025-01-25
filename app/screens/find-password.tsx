import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
import styles from '../styles/login-style';

export default function FindIdPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleFindId = async () => {
    if (!email) {
      Alert.alert('Error', '이메일을 입력해주세요.');
      return;
    }
    axios
      .post(API_URL + "/users/update-password/send-auth-email", email)
      .then((response) => {
        router.push({
          pathname: '/screens/signup-verify',
          params: { email: email },
        });
      })
      .catch((error) => {
        Alert.alert('', error.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 찾기</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button title="확인" onPress={handleFindId} />

      <Text
        style={styles.signupLink}
        onPress={() => router.push('/screens/find-password-verify')}
      >
        Back to Login
      </Text>
    </View>
  );
}
