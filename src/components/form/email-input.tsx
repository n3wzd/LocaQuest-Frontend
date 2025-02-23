import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useController } from 'react-hook-form';
import styles from '@/src/styles/form';

interface EmailInputProps {
  control: any;
  errors: any;
}

export default ({ control, errors }: EmailInputProps) => {
  const { field } = useController({
    name: 'email',
    control,
    rules: {
      required: '이메일을 입력해주세요.',
      maxLength: {
        value: 320,
        message: '이메일 길이가 너무 깁니다.',
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: '이메일 형식이 올바르지 않습니다.',
      },
    },
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="이메일 입력"
        keyboardType="email-address"
        onChangeText={field.onChange}
        {...field}
      />
      {errors.email && typeof errors.email.message === 'string' && (
        <Text style={styles.warnText}>{errors.email.message}</Text>
      )}
    </View>
  );
};
