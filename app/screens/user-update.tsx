import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
import styles from '../styles/signup-style';
import tokenManager from '../utils/token-manager';

interface FormData {
  name: string;
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
      .post(API_URL + "/users/update", {
        name: data.name,
        password: data.password
      }, {
        headers: {
          Authorization: `Bearer ${tokenManager.getToken()}`,
        },
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
      <Text style={styles.title}>개인정보 수정</Text>

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

      <TextInput
        style={styles.input}
        placeholder="이름 입력"
        onChangeText={(text) => setValue('name', text)}
        {...register('name', { required: '이름을 입력해주세요.', minLength: 2, maxLength: 100 })}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Button title="수정" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
