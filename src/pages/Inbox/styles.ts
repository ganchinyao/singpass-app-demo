import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  ellipsesContainer: {
    alignItems: 'flex-end',
  },
  inboxHeaderText: {
    ...Fonts.boldText,
    fontSize: Fonts.xxlarge,
  },
  searchBarContainer: {
    marginTop: 16,
  },
});
