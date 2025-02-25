import http from '../utils/http';
import errorHandler from '../utils/http-error-handler';
import GAME from '../config/game';
import useUserStatisticStore from '@/src/stores/user-statistic';
import useUserAchevementStore from '@/src/stores/user-achievement';
import useAttendPopupStore from '@/src/stores/attend-popup';
import statDB from '@/src/services/user-statistic';
import achvDB from '@/src/services/user-achievement';
import format from '@/src/utils/date';
// import crypto from '../config/crypto';

export const startApi = async () => {
    interface Response {
        achievementList: Achievement[],
        userAchievementList: UserAchievement[],
        userStatisticList: UserStatistic[],
        attended: boolean,
    }
    try {
        const today = format.getToday();
        const response = await http.post({
            url: "/client/start", 
            useToken: true,
            server: "ACTIVITY",
            params: { date: today }
        });
        const data: Response = response.data;
        
        GAME.init(data.achievementList);
        statDB.insertAll(data.userStatisticList);
        statDB.setAttendDate(today);
        achvDB.initData();
        achvDB.insertAll(data.userAchievementList);

        useUserStatisticStore.getState().resetUserStatistic();
        useUserAchevementStore.getState().resetUserAchvMap();
        useUserStatisticStore.getState().setUserStatistic({ statDate: format.getToday(), ...statDB.sumAll() });
        useUserAchevementStore.getState().initAchvMapFromDB();
        if(data.attended) {
            useAttendPopupStore.getState().openPopup();
        }
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
