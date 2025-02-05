import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import UserData from '../types/user-data';

const storageKey = 'user_token';

const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync(storageKey, token);
  } catch (e) {
    console.error('Failed to save token:', e);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(storageKey);
    return token;
  } catch (e) {
    console.error('Failed to get token:', e);
    return null;
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(storageKey);
  } catch (e) {
    console.error('Failed to remove token:', e);
  }
};

const decodeToken = async () => {
  const token = await getToken();
  if(token !== null) {
    return jwtDecode(token) as UserData;
  }
  return null;
};

const getName = async () => {
  const token = await decodeToken();
  return token?.name ?? "";
};

export default {
  saveToken: saveToken,
  getToken: getToken,
  removeToken: removeToken,
  getName: getName
};
