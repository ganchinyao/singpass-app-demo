import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';
import { CARD_WIDTH } from '../../feature/home/MyCards/constants';

export const styles = StyleSheet.create({
  circle: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    marginTop: 8,
    fontSize: Fonts.small,
    maxWidth: 72,
    textAlign: 'center',
  },
});
