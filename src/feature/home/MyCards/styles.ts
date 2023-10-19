import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../constants';
import { CARD_WIDTH } from './constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  cardScrollViewContainer: {
    paddingLeft: 24,
    marginTop: 16,
    height: 50,
  },
  cardScrollViewContentContainer: {
    alignItems: 'flex-start',
  },
  myCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 32,
    marginLeft: 24,
  },
  myCardsHeaderText: {
    ...Fonts.boldText,
    fontSize: Fonts.large,
  },
  cardContainer: {
    height: 200,
  },
  card: {
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
