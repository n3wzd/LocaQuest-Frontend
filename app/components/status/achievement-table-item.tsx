import React from 'react';
import { View, Text, Image } from 'react-native';
import { Asset } from 'expo-asset';
import imagePaths from '../../utils/image-paths';
import { Achievement } from '../../types/user-status';
import ProgressBar from './progress-bar';
import styles from '../../styles/common';
import theme from '../../styles/theme';

export default ({ achievement }: { achievement: Achievement }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.lightSpace, width: "47%", height: 240, margin: 5 }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{ ...styles.title, marginBottom: 10 }}>{achievement.name}</Text>
        <Image source={{ uri: Asset.fromModule(imagePaths[achievement.achvId]).uri }} style={{ ...styles.badgeImage, width: 90, height: 90, margin: 15 }} />
        <Text style={{ ...styles.text, marginBottom: 10 }}>{achievement.desc}</Text>
      </View>
      {achievement.progress === 100 ? (
        <View style={{alignItems: 'center'}}>
          <Text style={{ ...styles.boldText, color: theme.colors.lightWine }}>완료!</Text>
        </View>
      ) : (
        <ProgressBar gauge={achievement.progress} />
      )}
    </View>
  );
};
