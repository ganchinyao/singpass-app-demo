import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 6,
  },
  settingsContainer: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  greetingsContainer: {
    marginLeft: 24,
  },
  greetingTitle: {
    fontSize: Fonts.large,
  },
  grettingName: {
    fontWeight: '500',
    fontSize: Fonts.xxlarge,
  },
  contentMargin: {
    marginHorizontal: 20,
  },
  myProfileContainer: {
    marginTop: 24,
  },
});
