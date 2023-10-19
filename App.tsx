import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from './src/pages/Home';
import { ScanPage } from './src/pages/Scan';
import { InboxPage } from './src/pages/Inbox';
import { Colors, ROUTES } from './src/constants';
import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store, useAppDispatch, useAppSelector } from './src/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InboxDetailsPage } from './src/pages/InboxDetails';
import { SettingsPage } from './src/pages/Settings';
import { STORAGE_KEYS, getData, storeData } from './db/asyncStorage';
import { db } from './db/db';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { selectReadItemIds, setDeletedItemIds, setReadItemsId } from './src/store/slices/inboxSlice';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QRConfirmationPage } from './src/pages/QRConfirmation';
import Toast from 'react-native-toast-message';
import { PhoneNumberVerificationPage } from './src/pages/PhoneNumberVerification';
import { NRICBarcodePage } from './src/pages/NRICBarcode';
import { MyProfilePage } from './src/pages/MyProfile';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ScanStack = createNativeStackNavigator();
const InboxStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={`${ROUTES.HOME}_STACK`} component={HomePage} />
      <HomeStack.Screen name={ROUTES.SETTINGS} component={SettingsPage} />
      <HomeStack.Screen name={ROUTES.NRIC_BARCODE} component={NRICBarcodePage} />
      <HomeStack.Screen name={ROUTES.MY_PROFILE} component={MyProfilePage} />
    </HomeStack.Navigator>
  );
};

const ScanStackScreen = () => {
  return (
    <ScanStack.Navigator screenOptions={{ headerShown: false }}>
      <ScanStack.Screen name={`${ROUTES.SCAN}_STACK`} component={ScanPage} />
      <ScanStack.Screen name={ROUTES.QR_CONFIRMATION} component={QRConfirmationPage} />
      <ScanStack.Screen name={ROUTES.PHONE_NUMBER_VERIFICATION} component={PhoneNumberVerificationPage} />
    </ScanStack.Navigator>
  );
};

const InboxStackScreen = () => {
  return (
    <InboxStack.Navigator screenOptions={{ headerShown: false }}>
      <InboxStack.Screen name={`${ROUTES.INBOX}_STACK`} component={InboxPage} />
      <InboxStack.Screen name={ROUTES.INBOX_DETAILS} component={InboxDetailsPage} />
    </InboxStack.Navigator>
  );
};

const Navigation = () => {
  const readItemIds = useAppSelector(selectReadItemIds);
  const dispatch = useAppDispatch();
  const numUnreadMsgs = db.inboxMessages.length - readItemIds.length;

  useEffect(() => {
    // Initialize db read values
    async function init() {
      const readItemIds = (await getData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, true)) as string[];
      const deletedItemIds = (await getData(STORAGE_KEYS.INBOX_DELETE_MESSAGES_IDS, true)) as string[];
      dispatch(setReadItemsId(readItemIds));
      dispatch(setDeletedItemIds(deletedItemIds));
    }

    init();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            tabBarActiveTintColor: Colors.primaryRed,
            tabBarInactiveTintColor: Colors.black,
            tabBarStyle: { paddingVertical: 2 },
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
        <Tab.Screen name={ROUTES.HOME} component={HomeStackScreen} />
        <Tab.Screen name={ROUTES.SCAN} component={ScanStackScreen} />
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
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Initialize some db values
    async function init() {
      const readItemIds = (await getData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, true)) as string[];
      const deletedItemIds = (await getData(STORAGE_KEYS.INBOX_DELETE_MESSAGES_IDS, true)) as string[];
      // If it's the first time, initialize the array
      const defaultReadItemIds = db.inboxMessages.filter((item) => item.isRead).map((item) => item.id);
      if (!readItemIds) {
        await storeData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, JSON.stringify(defaultReadItemIds));
      }
      if (!deletedItemIds) {
        await storeData(STORAGE_KEYS.INBOX_DELETE_MESSAGES_IDS, JSON.stringify([]));
      }
      setAppIsReady(true);
    }

    init();
  }, []);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator style={{ marginTop: 4 }} size="large" color={Colors.primaryRed} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
        <Toast />
      </Provider>
    </SafeAreaProvider>
  );
}
