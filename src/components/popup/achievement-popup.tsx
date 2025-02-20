import React from "react";
import { Text, Modal, View } from "react-native";
import styles from '@/src/styles/common';
import useAchievementPopupStore from '@/src/stores/achievement-popup';
import GAME from '@/src/config/game';
import Badge from '../status/badge';
import Button from '../input/button';

export default () => {
  const { newAchvQueue, newAchvQueuePop } = useAchievementPopupStore();
  const currentAchievement = GAME.ACHIEVEMENT[Number(newAchvQueue[0].achvId)];

  return (
    <Modal
      visible={newAchvQueue.length > 0}
      transparent={true}
      animationType="fade"
      onRequestClose={newAchvQueuePop}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Badge achvId={Number(currentAchievement.achvId)} onPress={() => {}} />
          <Text style={styles.boldText}>{currentAchievement.name}</Text>
          <Text style={styles.text}>{currentAchievement.desc}</Text>
          <Button onPress={newAchvQueuePop} title="확인"/>
        </View>
      </View>
    </Modal>
  );
};
