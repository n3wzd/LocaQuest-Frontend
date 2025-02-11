import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/src/styles/form';
import LoadingButton from '@/src/components/input/loading-button';
import PasswordInput from '@/src/components/input/password-input';
import { deleteUser } from '@/src/api/user';

export default () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    deleteUser(password, router);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원 탈퇴</Text>
      <PasswordInput value={password} onChangeText={setPassword} />
      <LoadingButton title="탈퇴" onPress={onSubmit} />
    </View>
  );
};
