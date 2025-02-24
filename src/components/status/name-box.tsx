import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';

export default ({ name, bold = false, padding = 0 }: { name: string, bold?: boolean, padding?: number }) => {
  return (
    <View style={cardStyles.namecard}>
        <Text style={[bold ? styles.boldText : styles.text, { padding: padding }]}>{name}</Text>
    </View>
  );
};

const cardStyles = StyleSheet.create({
    namecard: {
        backgroundColor: theme.colors.lightCyanLevel[5], 
        padding: 3, 
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
});
