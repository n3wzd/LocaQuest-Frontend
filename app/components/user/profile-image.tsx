import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ProfileImage = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={styles.profileImage} />;
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfileImage;
