import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.status !== 'granted') {
        return null;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    return imageResult.assets;
};

export default {
    pickImage: pickImage,
}
