import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './button';
import imagePicker from '@/src/utils/image-picker';
import RoundImage from '../common/round-image';

export default () => {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const onPress = async () => {
        const uri = await imagePicker.pickImage();
        setImageUri(uri);
    }
    return (
        <View>
            {imageUri ? (<RoundImage uri={imageUri} radius={60} />) : null}
            <Button title="이미지 선택" onPress={onPress} />
        </View>
    );
};
