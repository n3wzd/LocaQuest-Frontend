import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from '../utils/axios-manager';
import styles from '../styles/signup-style';
import LoadingButton from '../components/loading-button';
import tokenManager from '../utils/token-manager';
import PasswordInput from '../components/password-input';

export default () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    await axios.post("/users/delete", { password: password }, true)
      .then(async (response) => {
        Alert.alert('', "탈퇴 완료!");
        await tokenManager.removeToken();
        router.push('/');
      })
      .catch((error) => {
        Alert.alert('', error.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원 탈퇴</Text>
      <PasswordInput value={password} onChangeText={setPassword} />
      <LoadingButton title="탈퇴" onPress={onSubmit} />
    </View>
  );
};
