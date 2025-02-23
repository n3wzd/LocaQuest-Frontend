import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "@/src/styles/common";
import theme from '@/src/styles/theme';

type IoniconName = keyof typeof Ionicons.glyphMap;

export default ({ icon, text, isActive, onPress }: { icon?: IoniconName, text: string, isActive: boolean, onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={[chipStyles.chip, isActive ? chipStyles.activeChip : chipStyles.inactiveChip]}
      onPress={onPress}
    >
      {icon ? (<Ionicons
        name={icon}
        size={18}
        color={isActive ? theme.colors.white : theme.colors.darkCyan}
        style={{ marginRight: 5 }}
      />) : null}
      <Text style={[chipStyles.text, isActive && chipStyles.activeText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const chipStyles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inactiveChip: {
    backgroundColor: theme.colors.lightGrey,
  },
  activeChip: {
    backgroundColor: theme.colors.darkCyan,
  },
  text: {
    ...styles.text,
    color: theme.colors.black,
  },
  activeText: {
    ...styles.boldText,
    color: theme.colors.white,
  },
});
