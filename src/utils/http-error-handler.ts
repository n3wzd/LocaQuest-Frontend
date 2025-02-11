import { Router } from "expo-router";
import { Alert } from "react-native";

const commonErrorHandler = (data: any, status: number) => {
    if(status === 403) {
        Alert.alert('', '잘못된 접근입니다.');
    } else {
        if (typeof data === "string") {
            Alert.alert('', data);
        }
    }
}

const tokenErrorHandler = (data: any, status: number, router: Router) => {
    if(status === 401) {
        Alert.alert('', '다시 로그인해주세요.');
        router.push('/');
    } else if(status === 403) {
        Alert.alert('', '잘못된 접근입니다.');
    } else {
        if (typeof data === "string") {
            Alert.alert('', data);
        }
    }
}

export { commonErrorHandler, tokenErrorHandler };
