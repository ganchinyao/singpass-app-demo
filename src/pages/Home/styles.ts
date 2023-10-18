import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    marginLeft: 20,
  },
  settingsContainer: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  greetingTitle: {
    fontSize: Fonts.large,
  },
  grettingName: {
    fontWeight: '500',
    fontSize: Fonts.xxlarge,
  },
});
