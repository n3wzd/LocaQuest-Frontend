import React, { useState } from "react";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Chip from '@/src/components/common/chip';
import styles from "@/src/styles/common";

interface ChoiceChipItem {
    label: string,
    value: string,
    icon?: Ionicons,
}

export default ({ options, onChange }: { options: ChoiceChipItem[], onChange: (value: string) => void }) => {
  const [selected, setSelected] = useState(0);
  const updateSelected = (idx: number) => {
      setSelected(idx);
      onChange(options[idx].value);
  }

  return (
    <View style={{ alignItems: "flex-start", margin: 4 }}>
      <View style={styles.rowContainer}>
        {options.map((option, idx) => (
          <View key={idx} style={{ marginHorizontal: 4 }}>
            <Chip
              text={option.label}
              icon={option.icon}
              isActive={selected === idx}
              onPress={() => updateSelected(idx)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
