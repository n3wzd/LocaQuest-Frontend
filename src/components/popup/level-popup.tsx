import React from "react";
import { Text, Modal, View, StyleSheet } from "react-native";
import styles from '@/src/styles/common';
import useLevelPopupStore from '@/src/stores/level-popup';
import Button from '../input/button';
import URI from "@/src/config/uri";
import EffectImage from "../common/effect-image";

export default () => {
  const { visiblePopup, level, closePopup } = useLevelPopupStore();

  return (
    <Modal
      visible={visiblePopup}
      transparent={true}
      animationType="fade"
      onRequestClose={closePopup}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={[styles.designedTitle, { marginBottom: 10 }]}>LEVEL UP!</Text>
          <EffectImage uri={URI.effect.level} radius={150} />
          <Text style={popupStyles.text}>{level}</Text>
          <Button onPress={closePopup} title="확인"/>
        </View>
      </View>
    </Modal>
  );
};

const popupStyles = StyleSheet.create({
  text: {
    ...styles.fancyText,
    position: 'absolute',
    top: '54%',
    left: '56%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    fontSize: 52,
  },
});
