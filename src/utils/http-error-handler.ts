import { isAxiosError } from "axios";
import { Router } from "expo-router";
import { Alert } from "react-native";

export default (error: any, router?: Router) => {
    if(isAxiosError(error) && error.response) {
        const data = error.response.data;
        const status = error.response.status;
        if(router && status === 401) {
            Alert.alert('', '다시 로그인해주세요.');
            router.push('/');
        } else if(status === 403) {
            Alert.alert('', '잘못된 접근입니다.');
        } else {
            if (typeof data === "string") {
                Alert.alert('', data);
            }
        }
        
    } else {
        Alert.alert('', '알 수 없는 오류가 발생했습니다.');
        console.error(error);
    }
}
