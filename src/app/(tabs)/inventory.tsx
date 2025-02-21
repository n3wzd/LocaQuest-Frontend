import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '@/src/styles/common';
import tokenManager from '@/src/utils/token';
import { useRouter } from 'expo-router';
import statDB from '@/src/services/user-statistic';
import BarChart from '@/src/components/chart/chart';
import format from '@/src/utils/date';

export default () => {
  const router = useRouter();
  const [chartData, setChartData] = useState<ChartData>();
  const CHART_COLUMN = 7;

  const handleLogout = async () => {
    await tokenManager.removeToken();
    router.push('/');
  }

  useEffect(() => {
    const statList = statDB.selectByRange(format.getDateFromToday(-CHART_COLUMN + 1), format.getToday());
    const datas: number[] = [];

    for(let i = 0; i < CHART_COLUMN; i++) {
      const item = statList.find(item => item.statDate === format.getDateFromToday(i - CHART_COLUMN + 1));
      datas.push(item ? item.exp : 0);
    }

    setChartData({
      labels: Array.from({ length: CHART_COLUMN }, (_, i) => format.getDateFromToday(i - CHART_COLUMN + 1).substring(5)),
      datasets: [ { data: datas } ],
    });
  }, []);

  return (
    chartData && <View style={styles.container}>
      <Button title="로그아웃" onPress={handleLogout} />
      <Text style={styles.boldText}>날짜별 데이터</Text>
      <BarChart data={chartData} />
    </View>
  );
}
