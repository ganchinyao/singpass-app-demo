import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 28,
    marginTop: 8,
  },
  ellipsesContainer: {
    alignItems: 'flex-end',
  },
  inboxHeaderText: {
    ...Fonts.boldText,
    fontSize: Fonts.xxlarge,
  },
  inboxDescText: {
    marginTop: 6,
    color: Colors.text,
  },
  searchBarContainer: {
    marginTop: 16,
  },
  listContainer: {
    flex: 1,
    marginTop: 24,
    borderTopWidth: 0.5,
    borderTopColor: Colors.border,
  },
  backToTopButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
  },
});
