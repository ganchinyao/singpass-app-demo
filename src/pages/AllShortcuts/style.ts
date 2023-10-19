import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: Colors.background,
  },
  allShortcutsTitle: {
    fontWeight: 'bold',
    fontSize: Fonts.xlarge,
  },
  allShortcutsDesc: {
    fontSize: Fonts.medium,
    marginRight: 10,
    marginTop: 10,
    color: Colors.text,
  },
  allShortcutsGridContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
