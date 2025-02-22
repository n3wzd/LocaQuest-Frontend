import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from "@/src/styles/common";
import theme from '@/src/styles/theme';

export default ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <View style={{ borderRadius: 12, padding: 12, marginVertical: 6, backgroundColor: theme.colors.lightSpace }}>
            <Text style={[ styles.boldText, { paddingBottom: 6 } ]}>{title}</Text>
            {children}
        </View>
    );
};
