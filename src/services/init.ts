import tokenManager from '@/src/utils/token';
import { startBackgroundLocation } from '@/src/services/location';
import { startStepCounter } from '@/src/services/step-counter';
import { startApi } from '@/src/api/init';
import { profileImage } from '../utils/server-asset';
import useUserDataStore from '@/src/stores/user-data';

type MSG = 'success' | 'not-granted' | 'error';

const init = async (): Promise<MSG> => {
    const userDataState = useUserDataStore.getState();
    const token = await tokenManager.getToken();
    if (token) {
        const userId = await tokenManager.getUserId();
        const userData: UserData = {
            userId: userId,
            name: await tokenManager.getUserName(),
        }
        userDataState.setUserData(userData);
        userDataState.setProfileUri(await profileImage(Number(userId)));
        if(await startApi()) {
            await startStepCounter();
            const granted = await startBackgroundLocation();
            if(granted) {
                return 'success';
            } else {
                return 'not-granted';
            }
        }
    }
    return 'error';
}

export default init;
