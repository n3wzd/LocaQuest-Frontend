import { Router } from 'expo-router';
import http from '../utils/http';
import { Alert } from 'react-native';
import tokenManager from '../utils/token';
import errorHandler from '../utils/http-error-handler';

export const updatePassword = async (email: string, password: string, router: Router) => {
  try {
    await http.post({
      url: "/users/update-password", 
      params: { email: email, password: password },
      useToken: false,
      server: "CORE",
    });
    Alert.alert('', "수정되었습니다!");
    router.push('/');
  } catch(error) {
    errorHandler(error, router);
  }
}

export const updatePasswordCheckVerified = async (email: string, router: Router) => {
  try {
    await http.post({
      url: "/users/update-password/check-verified", 
      params: { email: email },
      useToken: false,
      server: "CORE",
    });
    router.push({
      pathname: '/screens/find-password-update',
      params: { email: email },
    });
  } catch(error) {
    errorHandler(error, router);
  }
}

export const updatePasswordSendAuthEmail = async (email: string, router: Router) => {
  try {
    await http.post({
      url: "/users/update-password/send-auth-email", 
      params: { email: email },
      useToken: false,
      server: "CORE",
    });
    router.push({
      pathname: '/screens/find-password-verify',
      params: { email: email },
    });
  } catch(error) {
    errorHandler(error, router);
  }
}

export const login = async (email: string, password: string, router: Router) => {
  try {
    const response = await http.post({
      url: "/users/login", 
      params: { email: email, password: password },
      useToken: false,
      server: "CORE",
    });
    await tokenManager.saveToken(response.data as string);
    router.push('/(tabs)/quest');
  } catch(error) {
    errorHandler(error, router);
  }
}

export const registerCheckVerified = async (email: string, router: Router) => {
  try {
    const response = await http.post({
      url: "/users/register/check-verified", 
      params: { email: email },
      useToken: false,
      server: "CORE",
    });
    await tokenManager.saveToken(response.data as string);
    router.push('/(tabs)/quest');
  } catch(error) {
    errorHandler(error, router);
  }
}

export const register = async (email: string, password: string, name: string, router: Router) => {
  try {
    await http.post({
      url: "/users/register/send-auth-mail", 
      params: { email: email, password: password, name: name },
      useToken: false,
      server: "CORE",
    });
    router.push({
      pathname: '/screens/signup-verify',
      params: { email: email },
    });
  } catch(error) {
    errorHandler(error, router);
  }
}

export const deleteUser = async (password: string, router: Router) => {
  try {
    await http.post({
      url: "/users/delete", 
      params: { password: password },
      useToken: true,
      server: "CORE",
    });
    Alert.alert('', "탈퇴 완료!");
    await tokenManager.removeToken();
    router.push('/');
  } catch(error) {
    errorHandler(error, router);
  }
}

export const updateUser = async (password: string, name: string, router: Router) => {
  try {
    const response = await http.post({
      url: "/users/update", 
      params: { password: password, name: name },
      useToken: true,
      server: "CORE",
    });
    await tokenManager.saveToken(response.data as string);
    Alert.alert('', "수정되었습니다!");
    router.push('/(tabs)/status');
  } catch(error) {
    errorHandler(error, router);
  }
}
