import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from '@/src/styles/common';
import tokenManager from '@/src/utils/token';
import { useRouter } from 'expo-router';
import statDB from '@/src/services/statistic';

export default () => {
  const router = useRouter();
  const [statList, setStatList] = useState<UserStatistic[]>([]);

  const handleLogout = async () => {
    await tokenManager.removeToken();
    router.push('/');
  }

  useEffect(() => {
    setStatList(statDB.select());
  }, []);

  const renderItem = ({ item }: { item: UserStatistic }) => (
    <View>
      <Text>{item.statDate}</Text>
      <Text>{item.exp}</Text>
      <Text>{item.steps}</Text>
      <Text>{item.distance}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="로그아웃" onPress={handleLogout} />
      <Text style={styles.boldText}>날짜별 데이터</Text>
      <View>
        <View>
          <Text style={styles.text}>날짜</Text>
          <Text style={styles.text}>경험치</Text>
          <Text style={styles.text}>걸음수</Text>
          <Text style={styles.text}>이동 거리</Text>
        </View>
        <FlatList
          data={statList}
          renderItem={renderItem}
          keyExtractor={(item) => item.statDate}
        />
      </View>
    </View>
  );
}
