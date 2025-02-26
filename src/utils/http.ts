import axios from '../libs/axios';
import mime from '../libs/mime';
import storage from '../utils/token';
import URL from '../config/url';
import { getFileName } from './file';

type ServerType = "CORE" | "ACTIVITY";

interface httpParam {
    url: string, 
    params?: Record<string, any>, 
    useToken?: boolean, 
    server: ServerType,
}

const createUrl = ( baseUrlType: ServerType, detailUrl: string ) => {
    return URL.API_BASE[baseUrlType] + detailUrl;
}

const appendAuthorization = async (useToken: boolean) => useToken ? `Bearer ${await storage.getToken()}` : undefined;

const request = async ({url, params = {}, useToken = false, server = "CORE", method}: httpParam & { method: 'get' | 'post' | 'put' }) => {
    const header = {
        Authorization: await appendAuthorization(useToken),
    }
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

const upload = async ({ url, fileUri, useToken = false }: { url: string, fileUri: string, useToken?: boolean }) => {
    const formData = new FormData();
    formData.append('file', {
        uri: fileUri,
        type: mime.getType(fileUri),
        name: getFileName(fileUri),
    } as unknown as Blob);
    const header = {
        Authorization: await appendAuthorization(useToken),
        "Content-Type": "multipart/form-data"
    }
    const fullUrl = createUrl("CORE", url);
    return await axios.post({ url: fullUrl, params: formData, header: header });
};

export default {
    get: get,
    post: post,
    put: put,
    upload: upload,
};
