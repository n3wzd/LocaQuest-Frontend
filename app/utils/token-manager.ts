import * as SecureStore from 'expo-secure-store';

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
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(storageKey);
  } catch (e) {
    console.error('Failed to remove token:', e);
  }
};

export default {
  saveToken: saveToken,
  getToken: getToken,
  removeToken: removeToken
};
