import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/src/styles/form';
import LoadingButton from '@/src/components/input/loading-button';
import EmailInput from '@/src/components/input/email-input';
import PasswordInput from '@/src/components/input/password-input';
import { login } from '@/src/api/user';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('', '이메일 또는 비밀번호를 입력해주세요.');
      return;
    }
    login(email, password, router);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <EmailInput value={email} onChangeText={setEmail} />
        <PasswordInput value={password} onChangeText={setPassword} />
        <LoadingButton title="Login" onPress={handleLogin} />
        <Text onPress={() => router.push('/screens/signup')} style={{ marginTop: 4 }}>
          회원가입
        </Text>
      </View>
    </View>
  );
}
