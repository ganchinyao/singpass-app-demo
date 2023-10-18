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
  messageDate: {
    alignSelf: 'center',
    marginTop: 28,
    color: Colors.grey['500'],
  },
  messageBodyContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginHorizontal: 24,
    marginTop: 8,
  },
  messageBodyText: {},
});
