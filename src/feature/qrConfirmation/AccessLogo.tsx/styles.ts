import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 24,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  arrowIcon: {
    paddingHorizontal: 8,
  },
  companyLogo: {
    width: 42,
    height: 42,
  },
});
