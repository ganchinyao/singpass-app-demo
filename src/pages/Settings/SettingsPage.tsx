import { Alert, Button, View } from 'react-native';
import { styles } from './styles';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import { clearAllData } from '../../../db/asyncStorage';
import RNRestart from 'react-native-restart';
import Toast from 'react-native-toast-message';

const SettingsPage = () => {
  const showResetConfirmation = () => {
    Alert.alert(
      'Reset to default',
      'Reset everything to default, such as resetting storage?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            clearAllData(() => {
              Toast.show({
                type: 'success',
                text1: `Reset success. Awaiting restart...`,
              });
              setTimeout(() => {
                RNRestart.restart();
              }, 2000);
            });
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <ActionBarContainer title="Settings">
      <View style={styles.container}>
        <Button onPress={showResetConfirmation} title="Reset to default" />
      </View>
    </ActionBarContainer>
  );
};

export default SettingsPage;
