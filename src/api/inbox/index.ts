import { db } from '../../../db/db';
import { delay } from '../../utils';

export const fetchInboxItems = async (limit: number, offset: number) => {
  // Simulate a network delay
  await delay(1000);

  return db.inboxMessages.slice(offset, offset + limit);
};
