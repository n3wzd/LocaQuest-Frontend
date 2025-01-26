import axios from 'axios';
import { API_URL } from '@env';
import tokenManager from './token-manager';

const get = async (
    url: string, 
    params: Record<string, any> = {}, 
    useToken: boolean = false, 
) => axios
    .get(API_URL + url, { params: params, headers: useToken ? { Authorization: `Bearer ${await tokenManager.getToken()}` } : undefined })

const post = async (
    url: string, 
    body: Record<string, any> = {}, 
    useToken: boolean = false, 
) => axios
    .post(API_URL + url, body, { headers: useToken ? { Authorization: `Bearer ${await tokenManager.getToken()}` } : undefined })

export default {
    get: get,
    post: post,
};
