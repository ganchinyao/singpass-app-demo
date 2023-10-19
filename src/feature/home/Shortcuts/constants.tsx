import { Image } from 'react-native';
import CPFIcon from '../../../../assets/images/cpf_icon.png';
import MyHDBIcon from '../../../../assets/images/hdb_icon.png';

export enum CAROUSEL_SHORTCUTS {
  CPF = 'CPF Digital Services',
  MY_HDB = 'My HDBPage',
}

export enum SHORTCUT_ITEMS {
  CPF = 'CPF Digital Services',
  HEALTH_HUB = 'HealthHub',
  IRAS = 'IRAS MyTax Portal',
  MFA = 'MFA eRegister',
  MY_HDB = 'My HDBPage',
  MY_CAREERS = 'MyCareers Future',
  MY_ICA = 'MyICA',
  MY_SKILLS_FUTURE = 'MySkillsFuture',
  NOTARISE = 'Notarise',
  SPF = 'SPF E-Services',
}

const iconSize = {
  width: 24,
  height: 24,
};
export const IconsMap = {
  [SHORTCUT_ITEMS.CPF]: <Image source={CPFIcon} style={{ width: 42, height: 42 }} />,
  [SHORTCUT_ITEMS.MY_HDB]: <Image source={MyHDBIcon} style={iconSize} />,
};
