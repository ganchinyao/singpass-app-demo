import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from './src/pages/Home';
import { ScanPage } from './src/pages/Scan';
import { InboxPage } from './src/pages/Inbox';
import { Colors, ROUTES } from './src/constants';
import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store, useAppSelector } from './src/store';
import { selectNumUnreadMsgs } from './src/store/slices/inboxSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InboxDetailsPage } from './src/pages/InboxDetails';

const Tab = createBottomTabNavigator();
const InboxStack = createNativeStackNavigator();

const InboxStackScreen = () => {
  return (
    <InboxStack.Navigator screenOptions={{ headerShown: false }}>
      <InboxStack.Screen name={ROUTES.INBOX} component={InboxPage} />
      <InboxStack.Screen name={ROUTES.INBOX_DETAILS} component={InboxDetailsPage} />
    </InboxStack.Navigator>
  );
};

const Navigation = () => {
  const numUnreadMsgs = useAppSelector(selectNumUnreadMsgs);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            tabBarActiveTintColor: Colors.primaryRed,
            tabBarInactiveTintColor: Colors.black,
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case ROUTES.HOME:
                  return <Foundation name="home" size={size} color={color} />;
                case ROUTES.SCAN:
                  return <Ionicons name="scan-circle" size={size} color={color} />;
                case ROUTES.INBOX:
                  return <AntDesign name="mail" size={size} color={color} />;
              }
            },
          };
        }}
      >
        <Tab.Screen name={ROUTES.HOME} component={HomePage} />
        <Tab.Screen name={ROUTES.SCAN} component={ScanPage} />
        <Tab.Screen
          name={ROUTES.INBOX}
          component={InboxStackScreen}
          options={numUnreadMsgs > 0 ? { tabBarBadge: numUnreadMsgs } : {}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
