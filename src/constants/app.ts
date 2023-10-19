export const ROUTES = {
  HOME: 'HOME',
  SCAN: 'SCAN',
  INBOX: 'INBOX',
  INBOX_DETAILS: 'INBOX_DETAILS',
  SETTINGS: 'SETTINGS',
  QR_CONFIRMATION: 'QR_CONFIRMATION',
} as const;

export enum QR_TYPES {
  NORMAL = 'Normal_QR',
  VERIFY_SMS = 'Verify_QR',
}

export const INBOX_ITEMS_PER_PAGE = 10;
export const INBOX_ITEM_HEIGHT = 112;
