import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { QR_TYPES } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AccessLogos } from '../../feature/qrConfirmation/AccessLogo.tsx';
import { LoginPrompt } from '../../feature/qrConfirmation/LoginPrompt.tsx';

const QRConfirmationPage = ({ route }) => {
  const { qrType }: { qrType: QR_TYPES } = route.params;

  return (
    <SafeAreaView edges={['left', 'right', 'top']} style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <AccessLogos />
        <LoginPrompt qrType={qrType} />
      </View>
    </SafeAreaView>
  );
};

export default QRConfirmationPage;
