import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import styles from "../../styles/common";
import theme from "../../styles/theme";

export default ({ gauge }: { gauge: number }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.subText}>{gauge.toFixed(2)}%</Text>
            <View style={barStyles.progressBar}>
                <View style={[ barStyles.progressFill, { width: `${gauge}%` },]}/>
            </View>
        </View>
    );
};

const barStyles = StyleSheet.create({
    progressBar: {
      width: '100%',
      height: 8,
      backgroundColor: theme.colors.darkSpace,
      borderRadius: 4,
      marginTop: 4,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.lightWine,
    }
  });
