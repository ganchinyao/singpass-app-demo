import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  container: {
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
});
