import { getDistance, setDistance } from './location';
import useUserStatusStore from '@/src/stores/user-status';
import useAchievementPopupStore from '@/src/stores/achievement-popup';
import tokenManager from '@/src/utils/token';
import format from '@/src/utils/string-formater';

interface Request {
    userId: string,
    distance: number,
    date: string,
}
interface Reponse {
    userStatus: UserStatus,
    newAchvIdList: number[],
}

const url = 'ws://' + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_URL ?? "") + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_WEBSOCKET_PORT ?? "");
const ws = new WebSocket(url);

let deltaDistanceCache = 0;

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
    useUserStatusStore.getState().fetchUserStatus(data.userStatus);
    useAchievementPopupStore.getState().newAchvQueueAppend(data.newAchvIdList);
    setDistance(getDistance() - deltaDistanceCache);
};

const send = async () => {
    deltaDistanceCache = Math.floor(getDistance());
    const req: Request = {
        userId: await tokenManager.getUserId(),
        distance: deltaDistanceCache,
        date: format.formatDate((new Date()).toString()),
    }
    ws.send(JSON.stringify(req));
}

export default {
    send: send,
}
