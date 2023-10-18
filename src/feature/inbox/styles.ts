import { StyleSheet } from 'react-native';
import { Colors, Fonts, INBOX_ITEM_HEIGHT } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 28,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    height: INBOX_ITEM_HEIGHT,
    justifyContent: 'center',
  },
  containerUnreadBackground: {
    backgroundColor: Colors.white,
  },
  containerReadBackground: {
    backgroundColor: Colors.grey['50'],
  },
  senderTextStyle: {
    fontWeight: 'bold',
    fontSize: Fonts.medium,
  },
  bodyTextStyle: {
    marginTop: 8,
  },
  unreadText: {
    color: Colors.black,
  },
  readText: {
    color: Colors.grey['500'],
  },
  senderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  senderAndCircleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unreadCircle: {
    width: 10,
    height: 10,
    borderRadius: 5, // Half of width/height to make it a circle
    backgroundColor: Colors.primaryRed,
    marginRight: 6,
    marginLeft: -16,
  },
});
