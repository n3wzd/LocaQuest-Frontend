import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useController } from 'react-hook-form';
import styles from '@/src/styles/form';

interface NameInputProps {
  control: any;
  errors: any;
}

const NameInput = ({ control, errors }: NameInputProps) => {
  const { field } = useController({
    name: 'name',
    control,
    rules: {
      required: '이름을 입력해주세요.',
      minLength: {
        value: 2,
        message: '이름은 최소 2자 이상이어야 합니다.',
      },
      maxLength: {
        value: 100,
        message: '이름은 최대 100자 이하여야 합니다.',
      },
    },
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="이름 입력"
        onChangeText={field.onChange}
        {...field}
      />
      {errors.name && typeof errors.name.message === 'string' && (
        <Text style={styles.warnText}>{errors.name.message}</Text>
      )}
    </View>
  );
};

export default NameInput;
