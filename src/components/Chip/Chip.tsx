import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export type ChipProps = {
  label: string;
  isSelected?: boolean;
  onPress: () => any;
};

export const Chip = ({ label, isSelected, onPress }: ChipProps) => {
  return (
    <View style={[styles.container, isSelected && styles.selectedBackground]}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Text style={[styles.chipText, isSelected && styles.selectedChipText]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
