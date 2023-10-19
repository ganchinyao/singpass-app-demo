import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  qrSquare: {
    borderColor: Colors.white70,
    borderWidth: 2,
  },
  instructionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 32,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  instructionTitle: {
    ...Fonts.boldText,
    color: Colors.white,
    fontSize: Fonts.large,
  },
  instructionDesc: {
    color: 'rgba(227, 61, 67, 0.9)',
    fontSize: Fonts.medium,
    textDecorationLine: 'underline',
    marginTop: 4,
  },
});
