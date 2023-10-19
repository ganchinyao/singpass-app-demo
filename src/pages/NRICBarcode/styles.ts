import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  barcodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  barcode: {
    height: 64,
    width: 360,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  date: {
    color: Colors.white70,
    marginTop: 8,
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
});
