import { Alert, Button, View } from 'react-native';
import { styles } from './styles';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import { clearAllData } from '../../../db/asyncStorage';
import * as Updates from 'expo-updates';

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
              Updates.reloadAsync();
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
