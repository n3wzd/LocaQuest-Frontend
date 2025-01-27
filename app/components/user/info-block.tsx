import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBlock = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
});

export default InfoBlock;
