import { Dimensions } from 'react-native';

export const getScreenWidth = () => {
  const { width } = Dimensions.get('window');
  return width;
};
