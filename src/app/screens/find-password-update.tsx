import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { updatePassword } from '@/src/api/user';
import PasswordInput from '@/src/components/form/password-input';
import LoadingButton from '@/src/components/input/loading-button';
import styles from '@/src/styles/form';

interface FormData {
  password: string;
  confirmPassword: string;
}

export default () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const onSubmit = async (data: FormData) => {
    updatePassword(email as string, data.password, router);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 변경</Text>
      <PasswordInput control={control} errors={errors} watch={watch}/>
      <LoadingButton title="변경" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
