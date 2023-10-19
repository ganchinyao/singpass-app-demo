import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Colors, GlobalStyles } from '../../../constants';
import Toast from 'react-native-toast-message';

type MyCardsHeaderProps = {
  isCollapsedCards: boolean;
  toggleCollapseCards: () => void;
};

export const MyCardsHeader = ({ isCollapsedCards, toggleCollapseCards }: MyCardsHeaderProps) => {
  return (
    <View style={styles.myCardContainer}>
      <Text style={styles.myCardsHeaderText}>My Cards</Text>
      <View style={[GlobalStyles.row]}>
        <TouchableOpacity
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: `Nothing here :)`,
            });
          }}
        >
          <MaterialCommunityIcons name="dots-horizontal" size={24} color={Colors.primaryRed} />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              toggleCollapseCards();
            }}
          >
            <Feather name={isCollapsedCards ? 'eye' : 'eye-off'} size={24} color={Colors.primaryRed} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
