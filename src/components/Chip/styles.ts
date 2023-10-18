import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey['300'],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  selectedBackground: {
    backgroundColor: Colors.primaryRed,
  },
  chipText: {
    color: Colors.text,
    fontSize: 16,
  },
  selectedChipText: {
    color: Colors.white,
  },
});
