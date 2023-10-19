import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../constants';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myProfileTitle: {
    ...Fonts.boldText,
    fontSize: Fonts.large,
  },
  myProfileViewAll: {
    ...Fonts.boldText,
    fontSize: Fonts.medium,
    color: Colors.primaryRed,
  },
  myProfileCarouselContainer: {
    marginTop: 20,
    marginLeft: -20,
    marginRight: -20,
  },
  myProfileCarouselContentContainer: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  myProfileIconContainer: {
    marginHorizontal: 16,
  },
});
