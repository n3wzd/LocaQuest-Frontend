import React from "react";
import { Text, Modal, View } from "react-native";
import styles from '@/src/styles/common';
import useAttendPopupStore from '@/src/stores/attend-popup';
import format from '@/src/utils/date';
import Button from '../input/button';

export default () => {
  const { visiblePopup, closePopup } = useAttendPopupStore();
  return (
    <Modal
      visible={visiblePopup}
      transparent={true}
      animationType="fade"
      onRequestClose={closePopup}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={[styles.title, { marginBottom: 10 }]}>{ format.getToday() } 출석 완료!</Text>
          <Text style={[styles.text, { marginBottom: 15 }]}>오늘도 열심히 참여했군요!</Text>
          <Button onPress={closePopup} title="확인"/>
        </View>
      </View>
    </Modal>
  );
};
