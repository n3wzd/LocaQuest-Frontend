import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import styles from "@/src/styles/common";
import theme from "@/src/styles/theme";

export default ({ gauge, showValue = true, width, outline = true }: { gauge: number, showValue?: boolean, width?: number, outline?: boolean }) => {
  const barProgStyle: any[] = [barStyles.progressBar];
  if(width) barProgStyle.push({ width: width });
  return (
    <View style={{ alignItems: 'center' }}>
      {showValue ? (<Text style={styles.subText}>{gauge.toFixed(0)}%</Text>) : null}
      <View style={[barProgStyle, { borderWidth: outline ? 1 : 0 }]}>
        <View style={[ barStyles.progressFill, { width: `${gauge}%` },]}/>
      </View>
    </View>
  );
};

const barStyles = StyleSheet.create({
    progressBar: {
      width: '100%',
      height: 10,
      backgroundColor: theme.colors.black,
      borderRadius: 4,
      marginTop: 4,
      overflow: 'hidden',
      borderColor: theme.colors.lightCyan,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.lightCyan,
    }
  });
