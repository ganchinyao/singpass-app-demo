import { Text, View } from 'react-native';
import { styles } from './styles';

export const LoginHeader = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.loginTitle}>Log in to</Text>
      <Text style={styles.loginCompany}>MINDEF/MHA NS PORTAL (WEB)</Text>
    </View>
  );
};
