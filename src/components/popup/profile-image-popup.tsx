import React, { useEffect, useState } from "react";
import { Text, Alert, Modal, View } from "react-native";
import styles from '@/src/styles/common';
import ASSET from '@/src/config/asset';
import useProFileImagePopupStore from '@/src/stores/popup/profile-image-popup';
import useUserDataStore from '@/src/stores/user-data';
import LoadingButton from '../input/loading-button';
import RoundImage from "../common/round-image";
import imagePicker from "@/src/utils/image-picker";
import { uploadProfileImage, deleteProfileImage } from '@/src/api/user';
import { profileImage } from "@/src/utils/server-asset";

export default () => {
  const { visiblePopup, closePopup } = useProFileImagePopupStore();
  const { userData, profileUri, setProfileUri } = useUserDataStore();
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    if(visiblePopup) {
      setImageUri(profileUri);
    }
  },[visiblePopup])

  const onSelect = async () => {
      const uri = await imagePicker.pickImage();
      if(uri) {
        setImageUri(uri);
      }
  }
  const onDelete = async () => {
    await deleteProfileImage();
    setProfileUri(ASSET.profile.default);
    setImageUri(ASSET.profile.default);
  }
  const onUpload = async () => {
    if(imageUri) {
      await uploadProfileImage(imageUri, async () => {
        setProfileUri(await profileImage(Number(userData.userId)));
        Alert.alert('', "수정되었습니다!");
        closePopup();
      });
    } else {
      Alert.alert('', "이미지가 존재하지 않습니다.");
    }
  }

  return (
    <Modal
      visible={visiblePopup}
      transparent={true}
      animationType="fade"
      onRequestClose={closePopup}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={[styles.title, { marginBottom: 20 }]}>프로필 이미지 선택</Text>
          <View style={{ marginBottom: 20 }}>
              {imageUri ? (<RoundImage uri={imageUri} radius={100} />) : null}
          </View>
          <LoadingButton title="이미지 선택" onPress={onSelect} lineStyle={true} style={{ width: 120 }} />
          <View style={{ padding: 5 }}/>
          <LoadingButton title="초기화" onPress={onDelete} lineStyle={true} style={{ width: 120 }} />
          <View style={{ padding: 5 }}/>
          <LoadingButton onPress={onUpload} title="업로드" style={{ width: 120 }}/>
        </View>
      </View>
    </Modal>
  );
};
