import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/src/styles/form';
import EmailInput from '@/src/components/form/email-input';
import PasswordInput from '@/src/components/form/password-input';
import NameInput from '@/src/components/form/name-input';
import LoadingButton from '@/src/components/input/loading-button';
import { register } from '@/src/api/user';

interface FormData {
  name: string;
  email: string;
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
    register(data.email, data.password, data.name, router);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome To LocaQuest!</Text>
        <EmailInput control={control} errors={errors}/>
        <PasswordInput control={control} errors={errors} watch={watch}/>
        <NameInput control={control} errors={errors}/>
        <LoadingButton title="가입" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
