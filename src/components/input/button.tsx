import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '@/src/styles/form';

interface ButtonProps {
  onPress: () => void;
  title: string;
  lineStyle?: boolean;
  style?: object;
}

const button: React.FC<ButtonProps> = ({ onPress, title, lineStyle = false, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[lineStyle ? styles.buttonLine : styles.button, style]}
    >
      <Text style={[styles.text, {paddingHorizontal: 10}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default button;
