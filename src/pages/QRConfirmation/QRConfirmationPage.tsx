import React, { useCallback, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './styles';
import { Colors, QR_TYPES } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AccessLogos } from '../../feature/qrConfirmation/AccessLogo.tsx';
import { LoginPrompt } from '../../feature/qrConfirmation/LoginPrompt.tsx';
import { hasVerifiedPhoneNumber } from '../../utils/auth';
import { useFocusEffect } from '@react-navigation/native';

const QRConfirmationPage = ({ route }) => {
  const { qrType: _qrType }: { qrType: QR_TYPES } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [qrType, setQrType] = useState(_qrType);

  // useFocusEffect so that when we navigated back from PhoneNumberVerificationPage, we can check if the user has verified their phone number
  useFocusEffect(
    useCallback(() => {
      const checkPhoneNumberVerification = async () => {
        const isVerified = await hasVerifiedPhoneNumber();
        setQrType(isVerified ? QR_TYPES.NORMAL : QR_TYPES.VERIFY_SMS);
        setIsLoading(false);
      };

      if (qrType === QR_TYPES.NORMAL) {
        return;
      }

      setIsLoading(true);
      checkPhoneNumberVerification();
    }, [qrType])
  );

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <AccessLogos />
        <LoginPrompt qrType={qrType} />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView edges={['left', 'right', 'top']} style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={{ marginTop: 4 }} size="large" color={Colors.primaryRed} />
        ) : (
          renderContent()
        )}
      </View>
    </SafeAreaView>
  );
};

export default QRConfirmationPage;
