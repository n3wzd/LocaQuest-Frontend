import http from '../utils/http';
import errorHandler from '../utils/http-error-handler';
import GAME from '../config/game';
import useUserStatusStore from '@/src/stores/user-status';
import statDB from '@/src/services/statistic';
// import crypto from '../config/crypto';

export const setStoreData = async () => {
    interface Response {
        achievementList: Achievement[],
        userStatus: UserStatus,
    }
    try {
        const response = await http.post({
            url: "/client/init", 
            useToken: true,
            server: "ACTIVITY",
        });
        const data: Response = response.data;
        GAME.init(data.achievementList);
        useUserStatusStore.getState().fetchUserStatus(data.userStatus);
        return true;
    } catch(error) {
        errorHandler(error);
        return false;
    }
}

export const receiveRsmPublicKey = async () => {
    interface Response {
        rsaPublicKey: string,
    }
    try {
        const response = await http.get({
            url: "/client/init", 
            useToken: false,
            server: "CORE",
        });
        const data: Response = response.data;
        // crypto.init(Buffer.from(data.rsaPublicKey, 'base64'));
        return true;
    } catch(error) {
        errorHandler(error);
        return false;
    }
}

export const getUserStatisticList = async (userId: string) => {
    try {
        const response = await http.get({ url: `/user-status/statistics/${userId}`, useToken: false, server: "CORE" });
        const data: UserStatistic[] = response.data;
        statDB.insertAll(data);
        return true;
    } catch(error) {
        errorHandler(error);
        return false;
    }
}
