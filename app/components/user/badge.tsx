import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Badge = ({ imageUri, onPress }: { imageUri: string; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.badge}>
      <Image source={{ uri: imageUri }} style={styles.badgeImage} />
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
