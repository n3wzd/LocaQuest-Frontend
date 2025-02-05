import axios, { AxiosError } from 'axios';
import tokenManager from './token-manager';
import { Alert } from 'react-native';
import { Router } from 'expo-router';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

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

const handleError = (error: AxiosError, router: Router) => {
    if(error.response) {
        const statusCode = error.response.status;
        if(statusCode === 401) {
            Alert.alert('', '다시 로그인해주세요.');
            router.push('/');
        } else if(statusCode === 403) {
            Alert.alert('', '잘못된 접근입니다.');
        } else {
        const msg = error.response.data;
            if (typeof msg === "string") {
                Alert.alert('', msg);
            }
        }
    }
}

export default {
    get: get,
    post: post,
    handleError: handleError,
};
