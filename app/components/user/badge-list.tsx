import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Badge from './badge';

const BadgesList = ({ badges }: { badges: { id: number; image: string }[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>달성한 도전과제</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {badges.map((badge) => (
          <Badge key={badge.id} imageUri={badge.image} onPress={() => console.log('Go to achievements page')} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BadgesList;
