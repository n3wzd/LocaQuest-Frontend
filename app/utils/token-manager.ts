import SecureStorage from 'react-native-secure-storage';

const storeToken = async (token: string) => {
  try {
    await SecureStorage.setItem('user_token', token);
  } catch (e) {
    console.error('Failed to save token:', e);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStorage.getItem('user_token');
    return token;
  } catch (e) {
    console.error('Failed to fetch token:', e);
  }
};

const removeToken = async () => {
  try {
    await SecureStorage.removeItem('user_token');
  } catch (e) {
    console.error('Failed to remove token:', e);
  }
};
