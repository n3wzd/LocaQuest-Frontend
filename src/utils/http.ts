import axios from '../libs/axios';
import storage from '../utils/token';

type ServerType = "CORE" | "ACTIVITY";

interface httpParam {
    url: string, 
    params?: Record<string, any>, 
    useToken: boolean, 
    server: ServerType,
}

const createUrl = ( baseUrlType: ServerType, detailUrl: string ) => {
    const API_BASE_URL = {
        CORE: 'http://' + (process.env.EXPO_PUBLIC_SERVER_CORE_URL ?? "") + ":" + (process.env.EXPO_PUBLIC_SERVER_CORE_PORT ?? ""),
        ACTIVITY: 'http://' + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_URL ?? "") + ":" + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_HTTP_PORT ?? "")
    };
    return API_BASE_URL[baseUrlType] + detailUrl;
}

const createHeader = async (useToken: boolean) => 
    useToken ? { Authorization: `Bearer ${await storage.getToken()}` } : undefined;

const request = async ({url, params = {}, useToken = false, server = "CORE", method}: httpParam & { method: 'get' | 'post' | 'put' }) => {
    const header = await createHeader(useToken);
    const fullUrl = createUrl(server, url);
    const dto = { url: fullUrl, params: params, header: header };
    switch(method) {
        case 'get': return await axios.get(dto);
        case 'put': return await axios.put(dto);
        default: return await axios.post(dto);
    }
}

const get = async (params: httpParam) => {
    return await request({ ...params, method: 'get' });
};

const post = async (params: httpParam) => {
    return await request({ ...params, method: 'post' });
};

const put = async (params: httpParam) => {
    return await request({ ...params, method: 'put' });
};

export default {
    get: get,
    post: post,
    put: put,
};
