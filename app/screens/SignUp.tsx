import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from '../utils/axios-manager';
import styles from '../styles/form';
import EmailInput from '../components/form/email-input';
import PasswordInput from '../components/form/password-input';
import NameInput from '../components/form/name-input';
import LoadingButton from '../components/input/loading-button';

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
    const dto = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    await axios.post("/users/register/send-auth-mail", dto, false)
      .then((response) => {
        router.push({
          pathname: '/screens/signup-verify',
          params: { email: data.email },
        });
      })
      .catch((error) => {
        axios.handleError(error, router);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To LocaQuest!</Text>

      <EmailInput control={control} errors={errors}/>
      <PasswordInput control={control} errors={errors} watch={watch}/>
      <NameInput control={control} errors={errors}/>

      <LoadingButton title="가입" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
