import ImagePicker from '../libs/image-picker';
import { getFileExtension } from './file';
import { Alert } from "react-native";

const FILE_SIZE_LIMIT = 1 * 1024 * 1024;  // 1MB
const ALLOW_FILE_EXTENSION = ['jpg', 'png', 'jpeg'];

const pickImage = async () => {
    const imageAsset = await ImagePicker.pickImage();
    try {
        if(!imageAsset) {
            throw new Error('이미지가 선택되지 않았습니다.');
        }
        const image = imageAsset[0];
        if(!image.fileSize || image.fileSize > FILE_SIZE_LIMIT) {
            throw new Error('이미지 크기는 1mb 이하여야 합니다.');
        }
        if(!image.fileName || !ALLOW_FILE_EXTENSION.includes(getFileExtension(image.fileName))) {
            throw new Error('이미지 확장자는 jpg, png만 가능합니다.');
        }
        return image.uri;
    } catch(e) {
        Alert.alert('', (e as Error).message);
        return null;
    }
    
}

export default {
    pickImage: pickImage,
}
