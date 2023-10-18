import { InboxMessages } from '../../db/db';
import { ROUTES } from '../constants';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.SCAN]: undefined;
  [ROUTES.INBOX]: undefined;
  [ROUTES.INBOX_DETAILS]: { item: InboxMessages };
};
