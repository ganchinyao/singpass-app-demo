import { Text, View } from 'react-native';
import { LoginAs } from './LoginAs';
import { styles } from './styles';
import { ActionButton } from '../../../components/ActionButton';
import { MaterialIcons } from '@expo/vector-icons';
import { formatUnixTimestampToFullTime } from '../../../utils/datetime';
import { useNavigation } from '@react-navigation/native';
import { Colors, ROUTES } from '../../../constants';

export const VerifySMSLoginContent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <LoginAs />
      <View style={styles.loginContainer}>
        <Text style={styles.loginContentText}>
          You will need to verify your phone number first before you can login.
        </Text>
      </View>
      <View style={styles.loginCTAContainer}>
        <ActionButton
          title="Verify your Phone Number"
          gradientColor={['#4CAF50', '#388E3C']}
          onPress={() => {
            navigation.navigate(ROUTES.PHONE_NUMBER_VERIFICATION);
          }}
          icon={<MaterialIcons name="sms" size={24} color={Colors.white90} />}
        />
      </View>
      <Text style={styles.normalLoginDate}>{formatUnixTimestampToFullTime(Date.now() / 1000, ' at ')}</Text>
    </View>
  );
};
