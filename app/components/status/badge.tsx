import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/common';
import imagePaths from '../../utils/image-paths';

export default ({ achvId, onPress }: { achvId: number; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 10, alignItems: 'center' }}>
      <Image source={{ uri: Asset.fromModule(imagePaths[achvId]).uri }} style={{ ...styles.badgeImage, width: 60, height: 60 }} />
    </TouchableOpacity>
  );
};
