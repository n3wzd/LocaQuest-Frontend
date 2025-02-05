import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="quest"
        options={{
          title: 'Quest',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: 'Status',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false, 
        }}
      />
    </Tabs>
  );
}
