import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
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
  const { email } = useLocalSearchParams();

  const onSubmit = (data: FormData) => {
    axios
      .post(API_URL + "/users/update", {
        email: email,
        password: data.password
      })
      .then((response) => {
        Alert.alert('', "수정되었습니다!");
        router.push('/');
      })
      .catch((error) => {
        Alert.alert('', error.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 변경</Text>

      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        secureTextEntry
        onChangeText={(text) => setValue('password', text)}
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          minLength: { value: 8, message: '비밀번호는 최소 8자 이상이어야 합니다.' },
          maxLength: { value: 60, message: '비밀번호는 최대 60자 이하여야 합니다.' },
          pattern: {
            value: /^(?=.*[!@#$%^&*])/,
            message: '비밀번호에 특수문자를 포함해야 합니다.',
          },
        })}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry
        onChangeText={(text) => setValue('confirmPassword', text)}
        {...register('confirmPassword', {
          validate: (value) =>
            value === watch('password') || '비밀번호가 일치하지 않습니다.',
        })}
      />
      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword.message}</Text>
      )}

      <Button title="가입" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
