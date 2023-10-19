import { InboxMessages } from '../../db/db';
import { QR_TYPES, ROUTES } from '../constants';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.SCAN]: undefined;
  [ROUTES.INBOX]: undefined;
  [ROUTES.INBOX_DETAILS]: { item: InboxMessages };
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.QR_CONFIRMATION]: { qrType: QR_TYPES };
  [ROUTES.PHONE_NUMBER_VERIFICATION]: undefined;
  [ROUTES.NRIC_BARCODE]: undefined;
  [ROUTES.MY_PROFILE]: undefined;
  [ROUTES.ALL_SHORTCUTS]: undefined;
};
