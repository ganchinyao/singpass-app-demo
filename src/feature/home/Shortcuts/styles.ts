import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: Colors.white,
  },
  shortcutCarouselContainer: {
    marginTop: 20,
    marginLeft: -20,
    marginRight: -20,
  },
  shortcutCarouselContentContainer: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  shortcutIconContainer: {
    marginHorizontal: 16,
  },
  shortcutsTitle: {
    ...Fonts.boldText,
    fontSize: Fonts.large,
  },
  viewAllShortcutsText: {
    marginTop: 28,
    ...Fonts.boldText,
    fontSize: Fonts.medium,
    color: Colors.primaryRed,
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.grey['50'],
  },
  icon: {
    width: 24,
    height: 24,
  },
  shortcutsGridContentContainer: {
    backgroundColor: Colors.white,
  },
});
