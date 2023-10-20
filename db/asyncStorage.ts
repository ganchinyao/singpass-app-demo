import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  INBOX_READ_MESSAGES_IDS: 'INBOX_READ_MESSAGES_IDS',
  INBOX_DELETE_MESSAGES_IDS: 'INBOX_DELETE_MESSAGES_IDS',
  SCAN_VERIFIED_PHONE_NUMBER: 'SCAN_VERIFIED_PHONE_NUMBER',
};

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key: string, isValueAnObject?: boolean) => {
  try {
    const val = await AsyncStorage.getItem(key);
    if (val != null) {
      return isValueAnObject ? JSON.parse(val) : val;
    }
  } catch (e) {
    // error reading value
  }
};

export const clearAllData = async (onSuccess?: () => void) => {
  try {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
    console.log('Storage cleared successfully!');
    onSuccess?.();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};
