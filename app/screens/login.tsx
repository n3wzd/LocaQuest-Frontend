import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from '../utils/axios-manager';
import tokenManager from '../utils/token-manager';
import styles from '../styles/login-style';
import LoadingButton from '../components/loading-button';
import EmailInput from '../components/email-input';
import PasswordInput from '../components/password-input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('', '이메일 또는 비밀번호를 입력해주세요.');
      return;
    }
    const dto = {
      email: email,
      password: password
    };
    await axios.post("/users/login", dto, false)
      .then(async (response) => {
        await tokenManager.saveToken(response.data);
        router.push('/');
      })
      .catch((error) => {
        Alert.alert('', error.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <EmailInput value={email} onChangeText={setEmail} />
      <PasswordInput value={password} onChangeText={setPassword} />
      <LoadingButton title="Login" onPress={handleLogin} />

      <Text
        style={styles.signupLink}
        onPress={() => router.push('/screens/signup')}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
}
