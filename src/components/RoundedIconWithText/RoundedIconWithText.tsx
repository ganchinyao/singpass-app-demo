import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

type RoundedIconWithTextProps = {
  icon: ReactNode;
  text?: string;
  customStyle?: ViewStyle;
  onPress?: () => void;
};

export const RoundedIconWithText = ({ icon, text, customStyle, onPress }: RoundedIconWithTextProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={[styles.circle, customStyle]}>{icon}</View>
      {text && (
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
