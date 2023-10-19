import { Text, View } from 'react-native';
import { LoginAs } from './LoginAs';
import { styles } from './styles';
import { ActionButton } from '../../../components/ActionButton';
import { AntDesign } from '@expo/vector-icons';
import { formatUnixTimestampToFullTime } from '../../../utils/datetime';
import { StackActions, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ROUTES } from '../../../constants';
import { authenticate } from '../../../utils/auth';

export const NormalLoginContent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <LoginAs />
      <View style={styles.loginContainer}>
        <Text style={styles.loginContentText}>You are approving this login on another device.</Text>
      </View>
      <View style={styles.loginCTAContainer}>
        <ActionButton
          title="Reject"
          gradientColor={['#F44336', '#D32F2F']}
          onPress={() => {
            navigation.dispatch(StackActions.pop());
            navigation.navigate(ROUTES.HOME);
          }}
          icon={<AntDesign name={'close'} size={24} color="white" />}
        />
        <View style={{ width: 16 }} />
        <ActionButton
          title="Approve"
          gradientColor={['#4CAF50', '#388E3C']}
          onPress={async () => {
            const authenticated = await authenticate();
            if (authenticated) {
              Toast.show({
                type: 'success',
                text1: 'Mock Approval - Success',
              });
              navigation.dispatch(StackActions.pop());
              navigation.navigate(ROUTES.HOME);
            }
          }}
          icon={<AntDesign name={'check'} size={24} color="white" />}
        />
      </View>
      <Text style={styles.normalLoginDate}>{formatUnixTimestampToFullTime(Date.now() / 1000, ' at ')}</Text>
    </View>
  );
};
