import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from '@/src/styles/common';
import BarChart from '@/src/components/chart/bar-chart';
import LineChart from '@/src/components/chart/line-chart';
import ChartWrapper from '@/src/components/chart/chart-wrapper';
import useUserStatusStore from '@/src/stores/user-statistic';
import chart from '@/src/services/chart';
import ChoiceChips from '@/src/components/input/choice-chips';
import GrassGrid from '@/src/components/chart/grass-grid';
import format from '@/src/utils/date';

export default () => {
  useUserStatusStore();
  const [ valueType, setValueType ] = useState<UserParamProperty>('exp');
  const [ rangeType, setRangeType ] = useState<DateRangeType>('week1');
  const grassData = chart.getSingleData(format.getDateFromToday(-90), format.getToday());
  const chartData = {
    recent: chart.getSingleChartData(valueType),
    avg: chart.getRangeChartData(valueType, 'avg', rangeType),
    sum: chart.getRangeChartData(valueType, 'sum', rangeType),
  }
  const valueOptions = [
    { label: '경험치', value: 'exp', icon: 'game-controller' },
    { label: '걸음수', value: 'steps', icon: 'walk' },
    { label: '이동거리', value: 'distance', icon: 'move' },
  ];
  const rangeOptions = [
    { label: '1주', value: 'week1' },
    { label: '2주', value: 'week2' },
    { label: '1개월', value: 'month1' },
    { label: '3개월', value: 'month3' },
    { label: '6개월', value: 'month6' },
    { label: '1년', value: 'year1' },
  ];
  return (
    <View style={styles.screen}>
        <View style={{padding: 10, paddingHorizontal: 15}}>
          <ChoiceChips options={valueOptions} onChange={(value) => setValueType(value as UserParamProperty)}/>
          <ChoiceChips options={rangeOptions} onChange={(value) => setRangeType(value as DateRangeType)}/>
        </View>
        <ScrollView contentContainerStyle={styles.columnContainer}>
          <GrassGrid gridData={grassData}/>
          <ChartWrapper title="최근 1주일">
            <BarChart chartData={chartData.recent} />
          </ChartWrapper>
          <ChartWrapper title="평균">
            <LineChart chartData={chartData.avg} />
          </ChartWrapper>
          <ChartWrapper title="누적">
            <LineChart chartData={chartData.sum} />
          </ChartWrapper>
        </ScrollView>
    </View>
  );
}
