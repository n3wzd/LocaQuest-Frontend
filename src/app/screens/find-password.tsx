import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/src/styles/form';
import EmailInput from '@/src/components/input/email-input';
import LoadingButton from '@/src/components/input/loading-button';
import { updatePasswordSendAuthEmail } from '@/src/api/user';

export default function FindIdPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleFindId = async () => {
    if (!email) {
      Alert.alert('', '이메일을 입력해주세요.');
      return;
    }
    updatePasswordSendAuthEmail(email, router);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 찾기</Text>
      <EmailInput value={email} onChangeText={setEmail} />
      <LoadingButton title="확인" onPress={handleFindId} />
    </View>
  );
}
