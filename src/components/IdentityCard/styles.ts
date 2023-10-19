import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';
import { CARD_WIDTH } from '../../feature/home/MyCards/constants';

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  cardText: {
    color: Colors.white70,
    transform: [{ rotate: '-25deg' }],
    fontSize: Fonts.medium,
  },
});
