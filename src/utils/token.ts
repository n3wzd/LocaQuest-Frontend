import store from '../libs/secure-store';
import jwt from '../libs/jwt';

interface UserData {
    sub: string;
    name: string;
}

const STORAGE_TOKEN_KEY = 'user_token';

const saveToken = async (token: string) => {
    await store.set(STORAGE_TOKEN_KEY, token);
};

const getToken = async () => {
    return await store.get(STORAGE_TOKEN_KEY);
};

const removeToken = async () => {
    await store.remove(STORAGE_TOKEN_KEY);
};

const getUserId = async () => {
    const token = await getToken();
    const payload = token !== null ? await jwt.decodeToken(token) as UserData : null;
    return payload?.sub ?? "";
};

const getUserName = async () => {
    const token = await getToken();
    const payload = token !== null ? await jwt.decodeToken(token) as UserData : null;
    return payload?.name ?? "";
};

export default { 
    saveToken: saveToken,
    getToken: getToken,
    removeToken: removeToken,
    getUserId: getUserId,
    getUserName: getUserName,
};
