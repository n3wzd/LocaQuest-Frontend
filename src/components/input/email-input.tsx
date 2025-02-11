import React from 'react';
import { TextInput } from 'react-native';
import styles from '@/src/styles/form';

interface EmailInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Email"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
};

export default EmailInput;
