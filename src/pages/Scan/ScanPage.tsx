import { Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScanPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Scan ad</Text>
    </SafeAreaView>
  );
};

export default ScanPage;
