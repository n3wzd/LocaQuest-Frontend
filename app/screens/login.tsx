import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
import tokenManager from '../utils/token-manager';
import styles from '../styles/login-style';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('', '이메일 또는 비밀번호를 입력해주세요.');
      return;
    }

    axios
      .post(API_URL + "/users/login", {
        email: email,
        password: password
      })
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

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <Text
        style={styles.signupLink}
        onPress={() => router.push('/screens/signup')}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
}
