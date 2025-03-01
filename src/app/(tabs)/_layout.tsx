import AchievementPopup from '@/src/components/popup/achievement-popup';
import AttendPopup from '@/src/components/popup/attend-popup';
import LevelPopup from '@/src/components/popup/level-popup';
import Drawer from '@/src/components/drawer/drawer';
import Toolbar from '@/src/components/toolbar/toolbar';
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileImagePopup from '@/src/components/popup/profile-image-popup';
import theme from '@/src/styles/theme';

export default function TabLayout() {
  return (
    <>
      <Drawer/>
      <Toolbar/>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: theme.colors.darkSpace, height: 60 },
          tabBarActiveTintColor: theme.colors.lightCyan,
          tabBarInactiveTintColor: theme.colors.grey,
          tabBarLabelStyle: { fontSize: 13 },
          tabBarActiveBackgroundColor: theme.colors.lightSpace,
        }}
      >
        <Tabs.Screen
          name="quest"
          options={{
            title: 'Quest',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
            headerShown: false, 
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'history',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" color={color} size={size} />
            ),
            headerShown: false, 
          }}
        />
        <Tabs.Screen
          name="status"
          options={{
            title: 'Status',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="golf-outline" color={color} size={size} />
            ),
            headerShown: false, 
          }}
        />
      </Tabs>
      <AttendPopup/>
      <AchievementPopup/>
      <LevelPopup/>
      <ProfileImagePopup/>
    </>
  );
}
