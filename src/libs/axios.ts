import axios from 'axios';

interface RequestParam {
    url: string,
    params: any,
    header: any,
    thenCallback: HttpResopnseCallback,
    errorCallback: HttpResopnseCallback,
}

const request = async ({url, params, header, thenCallback, errorCallback, method}: RequestParam & { method: 'get' | 'post' }) => {
    const response = method === 'get' ?
            axios.get(url, { params: params, headers: header }) : 
            axios.post(url, params, { headers: header } )
    return response
        .then((response) => thenCallback(response.data, response.status))
        .catch((error) => errorCallback(error.response.data, error.response.status));
}

const get = async (params: RequestParam) => {
    request({...params, method: 'get'});
}

const post = async (params: RequestParam) => {
    request({...params, method: 'post'});
}

export default {
    get: get,
    post: post,
};
