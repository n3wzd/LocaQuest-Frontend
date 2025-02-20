import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '@/src/styles/form';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: object; 
}

const button: React.FC<ButtonProps> = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default button;
