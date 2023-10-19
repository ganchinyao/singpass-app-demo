import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

export const MyProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.myProfileTitle}>My Profile</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.MY_PROFILE);
        }}
      >
        <Text style={styles.myProfileViewAll}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};
