import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
});
