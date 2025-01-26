import React, { useState } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from '../styles/loading-button-style';

interface LoadingButtonProps {
  onPress: () => Promise<void>;
  title: string;
  style?: object; 
  disabledStyle?: object;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ onPress, title, style, disabledStyle }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await onPress();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, style, isLoading && (disabledStyle || styles.disabledButton)]}
      disabled={isLoading}
    >
      {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default LoadingButton;
