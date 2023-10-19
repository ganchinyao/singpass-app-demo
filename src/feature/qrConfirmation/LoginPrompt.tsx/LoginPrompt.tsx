import { View } from 'react-native';
import { styles } from './styles';
import { LoginHeader } from './LoginHeader';
import { QR_TYPES } from '../../../constants';
import { NormalLoginContent } from './NormalLoginContent';
import { VerifySMSLoginContent } from './VerifySMSLoginContent';

type LoginPromptProps = {
  qrType: QR_TYPES;
};

const LoginPrompt = ({ qrType }: LoginPromptProps) => {
  const renderContent = () => {
    switch (qrType) {
      case QR_TYPES.NORMAL:
        return <NormalLoginContent />;
      case QR_TYPES.VERIFY_SMS:
        return <VerifySMSLoginContent />;
    }
  };
  return (
    <View style={styles.container}>
      <LoginHeader />
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

export default LoginPrompt;
