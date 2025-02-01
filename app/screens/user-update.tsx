import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from '../utils/axios-manager';
import styles from '../styles/form-style';
import PasswordInput from '../components/form/password-input';
import NameInput from '../components/form/name-input';
import LoadingButton from '../components/input/loading-button';

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
    const dto = {
      name: data.name,
      password: data.password
    }
    await axios.post("/users/update", dto, true)
      .then((response) => {
        Alert.alert('', "수정되었습니다!");
        router.push('/(tabs)/setting');
      })
      .catch((error) => {
        axios.handleError(error, router);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원정보 수정</Text>

      <PasswordInput control={control} errors={errors} watch={watch}/>
      <NameInput control={control} errors={errors}/>

      <LoadingButton title="수정" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
