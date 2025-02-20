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
  const [statList, setStatList] = useState<UserStatistic[]>([]);

  const handleLogout = async () => {
    await tokenManager.removeToken();
    router.push('/');
  }

  useEffect(() => {
    setStatList(statDB.selectByRange(format.getDateFromToday(-7), format.getToday()));
  }, []);

  return (
    <View style={styles.container}>
      <Button title="로그아웃" onPress={handleLogout} />
      <Text style={styles.boldText}>날짜별 데이터</Text>
      <BarChart values={statList.map((item) => item.exp)} />
    </View>
  );
}
