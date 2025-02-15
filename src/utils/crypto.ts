import crpyto from '@/src/libs/crypto';
import CRYPTO from '@/src/config/crypto';

export const encryptoRSAPassword = (password: string) => {
    if(CRYPTO.CORE_PUBLIC_KEY) {
        //crpyto.encrypt(password, CRYPTO.CORE_PUBLIC_KEY);
    } else {
        throw Error("No RSA Key");
    }
}
