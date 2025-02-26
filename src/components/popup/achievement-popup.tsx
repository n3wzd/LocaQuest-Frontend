import React from "react";
import { Text, Modal, View } from "react-native";
import styles from '@/src/styles/common';
import useAchievementPopupStore from '@/src/stores/popup/achievement-popup';
import GAME from '@/src/config/game';
import Button from '../input/button';
import ASSET from "@/src/config/asset";
import EffectImage from "../common/effect-image";

export default () => {
  const { newAchvQueue, newAchvQueuePop } = useAchievementPopupStore();
  const currentAchievement = newAchvQueue.at(-1) ? GAME.ACHIEVEMENT[Number(newAchvQueue.at(-1)?.achvId)] : null;

  return currentAchievement ? (
    <Modal
      visible={newAchvQueue.length > 0}
      transparent={true}
      animationType="fade"
      onRequestClose={newAchvQueuePop}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={[styles.designedTitle, { marginBottom: 10 }]}>신규 업적 달성!</Text>
          <EffectImage uri={ASSET.achievements[Number(currentAchievement.achvId)]} radius={120} />
          <Text style={[styles.title, { marginBottom: 10 }]}>{currentAchievement.name}</Text>
          <Text style={[styles.text, { marginBottom: 15 }]}>{currentAchievement.desc}</Text>
          <Button onPress={newAchvQueuePop} title="확인"/>
        </View>
      </View>
    </Modal>
  ) : null;
};
