import { Dimensions } from 'react-native';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getScreenWidth = () => {
  const { width } = Dimensions.get('window');
  return width;
};
