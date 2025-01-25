import SecureStorage from 'react-native-secure-storage';

const storangeKey = 'user_token';

const saveToken = async (token: string) => {
  try {
    await SecureStorage.setItem(storangeKey, token);
  } catch (e) {
    console.error('Failed to save token:', e);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStorage.getItem(storangeKey);
    return token;
  } catch (e) {
    console.error('Failed to get token:', e);
  }
};

const removeToken = async () => {
  try {
    await SecureStorage.removeItem(storangeKey);
  } catch (e) {
    console.error('Failed to remove token:', e);
  }
};

export default {
  saveToken: saveToken,
  getToken: getToken,
  removeToken: removeToken
};
