import http from '../utils/http';
import { distance, setDistance } from '../services/location';

export const countStep = async () => {
    http.post({
        url: "/user-status/count-steps", 
        params: { distance: distance },
        useToken: true,
        server: "ACTIVITY",
        thenCallback: () => setDistance(0),
        errorCallback: (data) => console.error("count-steps axios error: ", data),
    });
}
