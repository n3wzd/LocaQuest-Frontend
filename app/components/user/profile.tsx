// Profile.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileImage from './profile-image';

const Profile = ({ name, imageUri }: { name: string; imageUri: string }) => {
  return (
    <View style={styles.container}>
      <ProfileImage uri={imageUri} />
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Profile;
