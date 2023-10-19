import { Image } from 'react-native';
import CPFIcon from '../../../../assets/images/cpf_icon.png';
import MyHDBIcon from '../../../../assets/images/hdb_icon.png';
import HealthHubIcon from '../../../../assets/images/healthhub_icon.png';
import IrasIcon from '../../../../assets/images/iras_icon.png';
import MFAIcon from '../../../../assets/images/mfa_icon.png';
import MyCareersFuture from '../../../../assets/images/my_career_future_icon.png';
import MyIcaIcon from '../../../../assets/images/my_ica_icon.png';
import MySkillsFuture from '../../../../assets/images/my_skills_future_icon.png';
import NotarizeIcon from '../../../../assets/images/notarise_icon.png';
import SPFIcon from '../../../../assets/images/spf_icon.png';

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
  width: 28,
  height: 28,
};
export const IconsMap = {
  [SHORTCUT_ITEMS.CPF]: <Image source={CPFIcon} style={{ width: 42, height: 42 }} />,
  [SHORTCUT_ITEMS.HEALTH_HUB]: <Image source={HealthHubIcon} style={{ width: 38, height: 38 }} />,
  [SHORTCUT_ITEMS.IRAS]: <Image source={IrasIcon} style={{ width: 38, height: 38 }} />,
  [SHORTCUT_ITEMS.MFA]: <Image source={MFAIcon} style={{ width: 62, height: 62 }} />,
  [SHORTCUT_ITEMS.MY_HDB]: <Image source={MyHDBIcon} style={iconSize} />,
  [SHORTCUT_ITEMS.MY_CAREERS]: <Image source={MyCareersFuture} style={{ width: 38, height: 38 }} />,
  [SHORTCUT_ITEMS.MY_ICA]: <Image source={MyIcaIcon} style={{ width: 38, height: 38 }} />,
  [SHORTCUT_ITEMS.MY_SKILLS_FUTURE]: <Image source={MySkillsFuture} style={iconSize} />,
  [SHORTCUT_ITEMS.NOTARISE]: <Image source={NotarizeIcon} style={{ width: 38, height: 38 }} />,
  [SHORTCUT_ITEMS.SPF]: <Image source={SPFIcon} style={{ width: 32, height: 32 }} />,
} as const;

export const ShortcutsLinkMap = {
  [SHORTCUT_ITEMS.CPF]: 'https://www.cpf.gov.sg/',
  [SHORTCUT_ITEMS.HEALTH_HUB]: 'https://www.healthhub.sg/',
  [SHORTCUT_ITEMS.IRAS]: 'https://www.iras.gov.sg/',
  [SHORTCUT_ITEMS.MFA]: 'https://www.mfa.gov.sg/',
  [SHORTCUT_ITEMS.MY_HDB]: 'https://www.hdb.gov.sg/',
  [SHORTCUT_ITEMS.MY_CAREERS]: 'https://content.mycareersfuture.gov.sg/',
  [SHORTCUT_ITEMS.MY_ICA]: 'https://www.ica.gov.sg/',
  [SHORTCUT_ITEMS.MY_SKILLS_FUTURE]: 'https://www.myskillsfuture.gov.sg/',
  [SHORTCUT_ITEMS.NOTARISE]: 'https://www.notarise.gov.sg/',
  [SHORTCUT_ITEMS.SPF]: 'https://www.police.gov.sg/',
};
