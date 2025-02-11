import * as SecureStore from 'expo-secure-store';

const set = async (key: string, value: string) => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (e) {
        console.error(`SecureStore - Failed to set ${key}: ${e}`);
    }
};

const get = async (key: string) => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (e) {
        console.error(`SecureStore - Failed to set ${key}: ${e}`);
        return null;
    }
};

const remove = async (key: string) => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (e) {
        console.error(`SecureStore - Failed to set ${key}: ${e}`);
    }
};

export default { 
    set: set,
    get: get,
    remove: remove,
};
