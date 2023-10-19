import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  safeAreaViewTop: {
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 18,
  },
});
