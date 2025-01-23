import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/SignUpStyle';

interface FormData {
  userId: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default ({ navigation }: { navigation: any }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setSuccessMessage('회원가입이 완료되었습니다!');
    setTimeout(() => router.push('/'), 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To LocaQuest!</Text>

      <TextInput
        style={styles.input}
        placeholder="아이디 입력"
        onChangeText={(text) => setValue('userId', text)}
        {...register('userId', { required: '아이디를 입력해주세요.', minLength: 3, maxLength: 50 })}
      />
      {errors.userId && <Text style={styles.error}>{errors.userId.message}</Text>}

      <TextInput
        style={styles.input}
        placeholder="이메일 입력"
        keyboardType="email-address"
        onChangeText={(text) => setValue('email', text)}
        {...register('email', {
          required: '이메일을 입력해주세요.',
          maxLength: 320,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '이메일 형식이 올바르지 않습니다.',
          },
        })}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

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

      <Button title="가입" onPress={handleSubmit(onSubmit)} />

      {successMessage && <Text style={styles.success}>{successMessage}</Text>}
    </View>
  );
};
