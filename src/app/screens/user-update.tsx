import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/src/styles/form';
import PasswordInput from '@/src/components/form/password-input';
import NameInput from '@/src/components/form/name-input';
import LoadingButton from '@/src/components/input/loading-button';
import { updateUser } from '@/src/api/user';

interface FormData {
  name: string;
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

  const onSubmit = async (data: FormData) => {
    await updateUser(data.password, data.name, router);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={[styles.title, { marginBottom: 10 }]}>정보 수정</Text>
        <PasswordInput control={control} errors={errors} watch={watch}/>
        <NameInput control={control} errors={errors}/>
        <LoadingButton title="수정" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
