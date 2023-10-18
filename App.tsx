import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from './src/pages/Home';
import { ScanPage } from './src/pages/Scan';
import { InboxPage } from './src/pages/Inbox';
import { Colors } from './src/constants';
import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            tabBarActiveTintColor: Colors.primary['500'],
            tabBarInactiveTintColor: Colors.black,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'HOME':
                  return <Foundation name="home" size={size} color={color} />;
                case 'SCAN':
                  return <Ionicons name="scan-circle" size={size} color={color} />;
                case 'INBOX':
                  return <AntDesign name="mail" size={size} color={color} />;
              }
            },
          };
        }}
      >
        <Tab.Screen name="HOME" component={HomePage} />
        <Tab.Screen name="SCAN" component={ScanPage} />
        <Tab.Screen name="INBOX" component={InboxPage} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
