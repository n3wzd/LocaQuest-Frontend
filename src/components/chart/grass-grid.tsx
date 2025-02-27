import React from "react";
import { View, Text } from "react-native";
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import format from '@/src/utils/date';
import ToolTip from '@/src/components/popup/tooltip';

const WEEKDAYS = 7;
const TOTAL_WEEKS = 12;
const EXP_Line = 5000;
const WEEK_DATA = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ];

const getColor = (value: number) => {
  const colors = theme.colors.lightCyanLevel;
  const idx = value === 0 ? 0 : (Math.floor(value / EXP_Line) + 1);
  return colors[idx >= colors.length ? colors.length - 1: idx];
};

export default ({ gridData }: { gridData: UserStatistic[] }) => {
  const day = format.getDayOfWeek() + 1;
  const gridCnt = WEEKDAYS * (TOTAL_WEEKS - 1) + day;
  const getColumn = (i: number) => i < TOTAL_WEEKS - 1 ? WEEKDAYS : day;
  return (
    <View style={[styles.rowContainer, styles.containerBlock, { marginVertical: 6, width: '92%' }]}>
      <View style={styles.columnContainer}>
        {WEEK_DATA.map((value, idx) => (
          <Text key={idx} style={[styles.text, { color: theme.colors.white, fontSize: 13, paddingVertical: 1 }]}>{value}</Text>
        ))}
      </View>
      <View style={{ flexDirection: "row", padding: 10 }}>
        {Array.from({ length: TOTAL_WEEKS }).map((_, weekIndex) => (
          <View key={weekIndex} style={{ flexDirection: "column", marginRight: 2 }}>
            {Array.from({ length: getColumn(weekIndex) }).map((_, dayIndex) => {
              const item = gridData[(gridData.length - 1) - (gridCnt - (weekIndex * WEEKDAYS + dayIndex + 1))];
              return (
                <ToolTip key={dayIndex} text={ `${item.statDate}: ${item.exp}xp` }>
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      backgroundColor: getColor(item.exp),
                      margin: 2,
                      borderRadius: 3,
                    }}
                  />
                </ToolTip>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};
