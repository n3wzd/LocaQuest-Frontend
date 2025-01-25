import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
import tokenManager from '../utils/token-manager';
import styles from '../styles/signup-style';

interface FormData {
  password: string;
  confirmPassword: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    axios
      .post(API_URL + "/users/delete", {
        password: data.password
      }, {
        headers: {
          Authorization: `Bearer ${tokenManager.getToken()}`,
        },
      })
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
      <Text style={styles.title}>계정 탈퇴</Text>

      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        secureTextEntry
        onChangeText={(text) => setValue('password', text)}
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
        })}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="가입" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
