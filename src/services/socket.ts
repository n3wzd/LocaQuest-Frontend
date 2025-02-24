import { getDistance, setDistance } from './location';
import useUserStatusStore from '@/src/stores/user-statistic';
import useUserAchevementStore from '@/src/stores/user-achievement';
import useAchievementPopupStore from '@/src/stores/achievement-popup';
import tokenManager from '@/src/utils/token';
import format from '@/src/utils/date';
import statDB from '@/src/services/user-statistic';
import achvDB from '@/src/services/user-achievement';

interface Request {
    userId: string,
    distance: number,
    date: string,
}
interface Reponse {
    deltaParam: UserParam,
    newAchvList: UserAchievement[],
}

const url = 'ws://' + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_URL ?? "") + ":" + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_WEBSOCKET_PORT ?? "");
const ws = new WebSocket(url);

ws.onopen = () => {
    console.log('websocket is connected');
};

ws.onmessage = () => {
    console.log('websocket is closed');
};

ws.onerror = (error) => {
    console.error('webSocket error:', error);
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data as string) as Reponse;
    const deltaData = data.deltaParam;
    useUserStatusStore.getState().addUserStatistic(deltaData);
    useUserAchevementStore.getState().updateAchvMapProgress();
    useUserAchevementStore.getState().addAchvMapAchvDate(data.newAchvList);
    useAchievementPopupStore.getState().newAchvQueueAppend(data.newAchvList);
    statDB.updateAttend();
    achvDB.insertAll(data.newAchvList);
    setDistance(getDistance() - deltaData.distance);
};

const send = async () => {
    const req: Request = {
        userId: await tokenManager.getUserId(),
        distance: 1,// Math.floor(getDistance()),
        date: format.getToday(),
    }
    ws.send(JSON.stringify(req));
}

export default {
    send: send,
}
