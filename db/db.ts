import { INBOX_MESSAGES } from './inbox';

// Mock db
export const db = {
  name: 'Lin Jun Jie',
  inboxMessages: INBOX_MESSAGES,
};

export type InboxMessages = {
  id: string;
  sender: string;
  body: string;
  date: number;
  isRead: boolean;
};
