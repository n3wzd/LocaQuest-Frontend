import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useController } from 'react-hook-form';

interface PasswordInputProps {
  control: any;
  errors: any;
  watch: any;
}

const PasswordInput = ({ control, errors, watch }: PasswordInputProps) => {
  const { field: passwordField } = useController({
    name: 'password',
    control,
    rules: {
      required: '비밀번호를 입력해주세요.',
      minLength: {
        value: 8,
        message: '비밀번호는 최소 8자 이상이어야 합니다.',
      },
      maxLength: {
        value: 60,
        message: '비밀번호는 최대 60자 이하여야 합니다.',
      },
      pattern: {
        value: /^(?=.*[!@#$%^&*])/,
        message: '비밀번호에 특수문자를 포함해야 합니다.',
      },
    },
  });

  const { field: confirmPasswordField } = useController({
    name: 'confirmPassword',
    control,
    rules: {
      validate: (value) =>
        value === watch('password') || '비밀번호가 일치하지 않습니다.',
    },
  });

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        placeholder="비밀번호 입력"
        onChangeText={passwordField.onChange}
        secureTextEntry
        {...passwordField}
      />
      {errors.password && typeof errors.password.message === 'string' && (
        <Text style={{ color: 'red' }}>{errors.password.message}</Text>
      )}
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        placeholder="비밀번호 확인"
        onChangeText={confirmPasswordField.onChange}
        secureTextEntry
        {...confirmPasswordField}
      />
      {errors.confirmPassword && typeof errors.confirmPassword.message === 'string' && (
        <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>
      )}
    </View>
  );
};

export default PasswordInput;
