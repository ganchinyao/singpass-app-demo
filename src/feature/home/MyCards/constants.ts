import { getScreenWidth } from '../../../utils';

export enum CARDS {
  NRIC = 'NRIC',
  DRIVING_LICENSE = 'Driving Licence',
  GOV_ID = 'GovID',
  WHAT_IS_THIS = 'What is this?',
}

export const CARD_WIDTH = getScreenWidth() * 0.7;
export const SPACER_SIZE = (getScreenWidth() - CARD_WIDTH) / 4;
