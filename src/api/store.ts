import http from '../utils/http';
import errorHandler from '../utils/http-error-handler';

export const setStoreData = async (setGameData: (data: GameData) => void, setStatusData: (data: UserStatus) => void) => {
    interface Response {
        gameData: GameData,
        userStatus: UserStatus,
    }
    try {
        const response = await http.post({
            url: "/client/init", 
            useToken: true,
            server: "ACTIVITY",
        });
        const data: Response = response.data;
        setGameData(data.gameData);
        setStatusData(data.userStatus);
        return true;
    } catch(error) {
        errorHandler(error);
        return false;
    }
}
