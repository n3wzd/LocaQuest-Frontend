import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from "@/src/styles/common";

export default ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <View style={[styles.containerBlock, { marginVertical: 6 }]}>
            <Text style={[ styles.boldText, { paddingBottom: 6 } ]}>{title}</Text>
            {children}
        </View>
    );
};
