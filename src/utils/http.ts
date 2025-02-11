import axios from '../libs/axios';
import storage from '../utils/token';

type ServerType = "CORE" | "ACTIVITY";

interface httpParam {
    url: string, 
    params?: Record<string, any>, 
    useToken: boolean, 
    server: ServerType,
    thenCallback: HttpResopnseCallback,
    errorCallback: HttpResopnseCallback,
}

const createUrl = ( baseUrlType: ServerType, detailUrl: string ) => {
    const API_BASE_URL = {
        CORE: process.env.EXPO_PUBLIC_API_SERVER_CORE_URL,
        ACTIVITY: process.env.EXPO_PUBLIC_API_SERVER_ACTIVITY_URL
    };
    return API_BASE_URL[baseUrlType] + detailUrl;
}

const createHeader = async (useToken: boolean) => 
    useToken ? { Authorization: `Bearer ${await storage.getToken()}` } : undefined;

const request = async ({url, params = {}, useToken = false, server = "CORE", method, thenCallback, errorCallback}: httpParam & { method: 'get' | 'post' }) => {
    const header = await createHeader(useToken);
    const fullUrl = createUrl(server, url);
    const dto = { url: fullUrl, params: params, header: header, thenCallback: thenCallback, errorCallback: errorCallback };
    return method === 'get' ? axios.get(dto) : axios.post(dto);
}

const get = async (params: httpParam) => {
    return request({ ...params, method: 'get' });
};

const post = async (params: httpParam) => {
    return request({ ...params, method: 'post' });
};

export default {
    get: get,
    post: post,
};
