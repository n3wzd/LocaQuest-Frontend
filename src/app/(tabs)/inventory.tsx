import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import styles from '@/src/styles/common';
import tokenManager from '@/src/utils/token';
import { useRouter } from 'expo-router';
import BarChart from '@/src/components/chart/bar-chart';
import LineChart from '@/src/components/chart/line-chart';
import ChartWrapper from '@/src/components/chart/chart-wrapper';
import useUserStatusStore from '@/src/stores/user-statistic';
import chart from '@/src/services/chart';

export default () => {
  const router = useRouter();
  const { userStatistic } = useUserStatusStore();
  
  const handleLogout = async () => {
    await tokenManager.removeToken();
    router.push('/');
  }
  const chartData1 = chart.getRecentData(userStatistic, 'exp');
  const chartData2 = chart.getRangeData(userStatistic, 'exp', 'avg', 'month1');
  const chartData3 = chart.getRangeData(userStatistic, 'exp', 'sum', 'month1');

  return (
    <View style={styles.screen}>
      <Button title="로그아웃" onPress={handleLogout} />
      {chartData1 && chartData2 && chartData3 ? 
        <ScrollView contentContainerStyle={styles.columnContainer}>
          <ChartWrapper title="날짜별 데이터 1">
            <BarChart chartData={chartData1} />
          </ChartWrapper>
          <ChartWrapper title="날짜별 데이터 2">
            <LineChart chartData={chartData2} />
          </ChartWrapper>
          <ChartWrapper title="날짜별 데이터 3">
            <LineChart chartData={chartData3} />
          </ChartWrapper>
        </ScrollView> : null}
    </View>
  );
}
