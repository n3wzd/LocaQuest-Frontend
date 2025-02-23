import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({ icon, text, onPress }: { icon?: string, text: string, onPress: () => void }) => {
    const [isPressed, setIsPressed] = useState(false);
    const getColor = () => isPressed ? theme.colors.black : theme.colors.white;
    return (
        <TouchableOpacity 
                activeOpacity={0.9}
                onPress={onPress} 
                onPressIn={() => setIsPressed(true)} 
                onPressOut={() => setIsPressed(false)} 
                style={[styles.rowContainer, itemStyles.item, { backgroundColor: isPressed ? theme.colors.white : theme.colors.transparent }]}>
            {icon ? (<Ionicons
                name={icon}
                size={18}
                color={getColor()}
                style={{ marginRight: 5 }}
            />) : null}
            <Text style={[styles.text, { marginLeft: 4, marginBottom: 2, color: getColor() }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const itemStyles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'flex-start',
  },
});
