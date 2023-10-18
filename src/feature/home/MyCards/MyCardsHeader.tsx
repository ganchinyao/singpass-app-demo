import { Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Colors, GlobalStyles } from '../../../constants';

export const MyCardsHeader = () => {
  return (
    <View style={styles.myCardContainer}>
      <Text style={styles.myCardsHeaderText}>My Cards</Text>
      <View style={[GlobalStyles.row]}>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color={Colors.primaryRed} />
        <View style={{ marginLeft: 20 }}>
          <Feather name="eye-off" size={24} color={Colors.primaryRed} />
        </View>
      </View>
    </View>
  );
};
