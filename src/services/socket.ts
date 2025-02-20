import { getDistance, setDistance } from './location';
import useUserStatusStore from '@/src/stores/user-statistic';
import useUserAchevementStore from '@/src/stores/user-achievement';
import useAchievementPopupStore from '@/src/stores/achievement-popup';
import tokenManager from '@/src/utils/token';
import format from '@/src/utils/date';
import statDB from '@/src/services/user-statistic';

interface Request {
    userId: string,
    distance: number,
    date: string,
}
interface Reponse {
    deltaParam: UserParam,
    newAchvList: UserAchievement[],
}

const url = 'ws://' + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_URL ?? "") + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_WEBSOCKET_PORT ?? "");
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
    useUserStatusStore.getState().addUserStatistic(data.deltaParam);
    useUserAchevementStore.getState().userAchvListAppend(data.newAchvList);
    useAchievementPopupStore.getState().newAchvQueueAppend(data.newAchvList);
    statDB.updateAttend();
    setDistance(getDistance() - data.deltaParam.distance);
};

const send = async () => {
    const req: Request = {
        userId: await tokenManager.getUserId(),
        distance: Math.floor(getDistance()),
        date: format.getToday(),
    }
    ws.send(JSON.stringify(req));
}

export default {
    send: send,
}
