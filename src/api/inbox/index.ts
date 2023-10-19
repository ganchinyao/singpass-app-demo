import { STORAGE_KEYS, getData, storeData } from '../../../db/asyncStorage';
import { db } from '../../../db/db';
import { delay } from '../../utils';

export const fetchInboxItems = async (limit: number, offset: number, deletedItemIds: string[] = []) => {
  // Simulate a network delay
  await delay(500);

  return db.inboxMessages.filter((item) => !deletedItemIds.includes(item.id)).slice(offset, offset + limit);
};

export const setInboxItemAsRead = async (id: string) => {
  // Simulate a network delay
  await delay(500);

  try {
    const readItems = await getData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, true);

    // If it's the first time, initialize the array
    if (!readItems) {
      await storeData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, JSON.stringify([id]));
    } else {
      // If the ID is not already stored, add it to the array and save
      if (readItems.indexOf(id) === -1) {
        readItems.push(id);
        await storeData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, JSON.stringify(readItems));
      }
    }
  } catch (e) {
    console.error('Error setting item as read:', e);
  }
};

export const getAllReadItems = async (): Promise<number[]> => {
  try {
    return await getData(STORAGE_KEYS.INBOX_READ_MESSAGES_IDS, true);
  } catch (e) {
    console.error('Error in getAllReadItems:', e);
  }
};

export const deleteInboxItem = async (id: string) => {
  try {
    const deletedItems = await getData(STORAGE_KEYS.INBOX_DELETE_MESSAGES_IDS, true);

    // If it's the first time, initialize the array
    if (!deletedItems) {
      await storeData(STORAGE_KEYS.INBOX_DELETE_MESSAGES_IDS, JSON.stringify([id]));
    } else {
      // If the ID is not already stored, add it to the array and save
      if (deletedItems.indexOf(id) === -1) {
        deletedItems.push(id);
        await storeData(STORAGE_KEYS.INBOX_DELETE_MESSAGES_IDS, JSON.stringify(deletedItems));
      }
    }
  } catch (e) {
    console.error('Error in deleteInboxItem:', e);
  }
};
