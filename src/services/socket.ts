import { distance, setDistance } from './location';
import useUserStatusStore from '@/src/stores/user-status';
import tokenManager from '@/src/utils/token';

interface Response {
    steps: number,
    distance: number,
    exp: number,
    achievementIdList: number[],
}
const url = 'ws://' + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_URL ?? "") + (process.env.EXPO_PUBLIC_SERVER_ACTIVITY_WEBSOCKET_PORT ?? "");
console.log(url);
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
    const data = JSON.parse(event.data as string) as Response;
    const userStatus = useUserStatusStore.getState().userStatus;
    if(userStatus) {
        const params = userStatus.userStatistic;
        useUserStatusStore.getState().fetchUserStatus({
            userStatistic: {
                steps: params.steps + data.steps,
                exp: params.exp + data.exp,
                distance: params.distance + data.distance,
                userId: userStatus.userStatistic.userId,
            },
            achievementList: userStatus.achievementList,
        });
    }
    setDistance(0);
};

const send = async () => {
    const req = {
        userId: await tokenManager.getUserId(),
        distance: Math.floor(distance),
    }
    ws.send(JSON.stringify(req));
}

export default {
    send: send,
}
