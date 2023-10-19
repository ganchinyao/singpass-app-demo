import { Text, View } from 'react-native';
import { styles } from './styles';

export const MyProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.myProfileTitle}>My Profile</Text>
      <Text style={styles.myProfileViewAll}>View all</Text>
    </View>
  );
};
