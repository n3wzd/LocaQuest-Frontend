import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from '../utils/axios-manager';
import PasswordInput from '../components/form/password-input';
import LoadingButton from '../components/input/loading-button';
import styles from '../styles/form-style';

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
    const dto = {
      email: email,
      password: data.password
    };
    await axios.post("/users/update-password", dto, false)
      .then((response) => {
        Alert.alert('', "수정되었습니다!");
        router.push('/');
      })
      .catch((error) => {
        axios.handleError(error, router);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 변경</Text>
      <PasswordInput control={control} errors={errors} watch={watch}/>
      <LoadingButton title="변경" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
