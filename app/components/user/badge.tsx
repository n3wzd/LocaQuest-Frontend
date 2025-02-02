import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import imagePaths from '../../utils/image-paths';

const Badge = ({ achvId, onPress }: { achvId: number; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.badge}>
      <Image source={{ uri: Asset.fromModule(imagePaths[achvId]).uri }} style={styles.badgeImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    marginRight: 10,
    alignItems: 'center',
  },
  badgeImage: {
    width: 50,
    height: 50,
  },
});

export default Badge;
