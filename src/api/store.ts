import { Router } from 'expo-router';
import http from '../utils/http';
import { commonErrorHandler, tokenErrorHandler } from '../utils/http-error-handler';

export const setStoreGameData = async (setData: (data: GameData) => void) => {
    http.post({
        url: "/client/init", 
        useToken: false,
        server: "ACTIVITY",
        thenCallback: (data) => setData(data),
        errorCallback: (data, status) => commonErrorHandler(data, status),
    });
}

export const setStoreUserStatus = async (setData: (data: UserStatus) => void, router: Router) => {
    http.post({
        url: "/user-status/", 
        useToken: true,
        server: "CORE",
        thenCallback: (data) => setData(data),
        errorCallback: (data, status) => tokenErrorHandler(data, status, router),
    });
}
