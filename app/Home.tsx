import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles/home-style';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholder}>Map Placeholder</Text>
      </View>

      <Link href="/screens/signup">가입</Link>
      <Link href="/screens/login">로그인</Link>
      <Link href="/screens/find-password">비밀번호 찾기</Link>
      <Link href="/screens/user-update">개인정보 수정</Link>
      <Link href="/screens/user-delete">탈퇴</Link>
    </View>
  );
}
