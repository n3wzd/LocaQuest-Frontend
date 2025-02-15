import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, Easing } from "react-native";
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import useAchievementPopupStore from '@/src/stores/achievement-popup';

export default ({ achievement }: { achievement: Achievement }) => {
  const { newAchvQueue, newAchvQueuePop } = useAchievementPopupStore();
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if(newAchvQueue.length > 0) {
      const transition = 500;
      const duration = 3000;

      Animated.timing(translateY, {
        toValue: 0,
        duration: transition,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();

      const timerErase = setTimeout(() => {
        Animated.timing(translateY, {
          toValue: -100,
          duration: transition,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }).start();
      }, duration);

      const timerOff = setTimeout(() => newAchvQueuePop(), duration + transition);
      
      return () => { 
        clearTimeout(timerErase);
        clearTimeout(timerOff);
      };
    }
  }, [newAchvQueue]);

  return (
    <Animated.View style={[popupStyle.popup, { transform: [{ translateY }] }]}>
      <Text style={[styles.boldText, { color: theme.colors.darkWine }]}>{achievement.name} 업적 달성!</Text>
    </Animated.View>
  );
};

const popupStyle = StyleSheet.create({
  popup: {
    position: "absolute",
    top: 50,
    left: "10%",
    width: "80%",
    alignItems: "center",
    backgroundColor: theme.colors.darkSpace,
    ...styles.container
  },
});
