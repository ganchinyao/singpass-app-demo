import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
});
