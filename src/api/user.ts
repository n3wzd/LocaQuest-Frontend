import { Router } from 'expo-router';
import http from '../utils/http';
import { commonErrorHandler, tokenErrorHandler } from '../utils/http-error-handler';
import { Alert } from 'react-native';
import tokenManager from '../utils/token';

export const updatePassword = async (email: string, password: string, router: Router) => {
  const callback = () => {
      Alert.alert('', "수정되었습니다!");
      router.push('/');
  }
  http.post({
      url: "/users/update-password", 
      params: { email: email, password: password },
      useToken: false,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => commonErrorHandler(data, status),
  });
}

export const updatePasswordCheckVerified = async (email: string, router: Router) => {
  const callback = () => {
    router.push({
      pathname: '/screens/find-password-update',
      params: { email: email },
    });
  }
  http.post({
      url: "/users/update-password/check-verified", 
      params: { email: email },
      useToken: false,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => commonErrorHandler(data, status),
  });
}

export const updatePasswordSendAuthEmail = async (email: string, router: Router) => {
  const callback = () => {
    router.push({
      pathname: '/screens/find-password-verify',
      params: { email: email },
    });
  }
  http.post({
      url: "/users/update-password/send-auth-email", 
      params: { email: email },
      useToken: false,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => commonErrorHandler(data, status),
  });
}

export const login = async (email: string, password: string, router: Router) => {
  const callback = async (data: any) => {
    await tokenManager.saveToken(data);
    router.push('/(tabs)/quest');
  }
  http.post({
      url: "/users/login", 
      params: { email: email, password: password },
      useToken: false,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => commonErrorHandler(data, status),
  });
}

export const registerCheckVerified = async (email: string, router: Router) => {
  const callback = async (data: any) => {
    await tokenManager.saveToken(data);
    router.push('/');
  }
  http.post({
      url: "/users/register/check-verified", 
      params: { email: email },
      useToken: false,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => commonErrorHandler(data, status),
  });
}

export const register = async (email: string, password: string, name: string, router: Router) => {
  const callback = () => {
    router.push({
      pathname: '/screens/signup-verify',
      params: { email: email },
    });
  }
  http.post({
      url: "/users/register/send-auth-mail", 
      params: { email: email, password: password, name: name },
      useToken: false,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => commonErrorHandler(data, status),
  });
}

export const deleteUser = async (password: string, router: Router) => {
  const callback = async () => {
    Alert.alert('', "탈퇴 완료!");
    await tokenManager.removeToken();
    router.push('/');
  }
  http.post({
      url: "/users/delete", 
      params: { password: password },
      useToken: true,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => tokenErrorHandler(data, status, router),
  });
}

export const updateUser = async (password: string, name: string, router: Router) => {
  const callback = async (data: any) => {
    await tokenManager.saveToken(data);
    Alert.alert('', "수정되었습니다!");
    router.push('/(tabs)/status');
  }
  http.post({
      url: "/users/update", 
      params: { password: password, name: name },
      useToken: true,
      server: "CORE",
      thenCallback: () => callback,
      errorCallback: (data, status) => tokenErrorHandler(data, status, router),
  });
}
