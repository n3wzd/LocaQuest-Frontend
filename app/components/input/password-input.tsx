import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/form-style';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Password"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      secureTextEntry
    />
  );
};

export default PasswordInput;
