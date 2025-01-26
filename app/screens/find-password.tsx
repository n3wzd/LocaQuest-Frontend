import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from '../utils/axios-manager';
import styles from '../styles/login-style';
import EmailInput from '../components/email-input';
import LoadingButton from '../components/loading-button';

export default function FindIdPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleFindId = async () => {
    if (!email) {
      Alert.alert('', '이메일을 입력해주세요.');
      return;
    }
    await axios.post("/users/update-password/send-auth-email", {email: email}, false)
      .then((response) => {
        router.push({
          pathname: '/screens/find-password-verify',
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
      <EmailInput value={email} onChangeText={setEmail} />
      <LoadingButton title="확인" onPress={handleFindId} />
    </View>
  );
}
