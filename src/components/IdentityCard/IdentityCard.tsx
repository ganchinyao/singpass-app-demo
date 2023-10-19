import { Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';
import { CARDS } from '../../feature/home/MyCards/constants';

type IdentityCardProps = {
  text: CARDS;
  customStyle?: ViewStyle;
};

export const IdentityCard = ({ text, customStyle }: IdentityCardProps) => {
  let backgroundColor;
  if (text === CARDS.NRIC) {
    backgroundColor = '#f1d3d7';
  } else if (text === CARDS.DRIVING_LICENSE) {
    backgroundColor = '#72a39f';
  } else if (text === CARDS.CHAS) {
    backgroundColor = '#ed6837';
  } else {
    backgroundColor = '#222222';
  }
  return (
    <View style={[styles.container, { backgroundColor }, { ...customStyle }]}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};
