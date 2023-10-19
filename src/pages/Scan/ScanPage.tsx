import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';

const TARGET_SQUARE_SIZE = 240;
const { width } = Dimensions.get('window');
const overlayHorizontalWidth = (width - TARGET_SQUARE_SIZE) / 2;

const ScanPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
  const [isCameraActive, setIsCameraActive] = useState(true);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setIsCameraActive(true);
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      setIsCameraActive(false);
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate(ROUTES.QR_CONFIRMATION, { qrType: data });
    setScanned(false);
  };

  if (hasPermission === null) {
    return <></>;
  }
  if (hasPermission === false) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No access to camera</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      {isCameraActive && (
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <View style={styles.overlay} />
      <View
        style={{
          flexDirection: 'row',
          height: TARGET_SQUARE_SIZE,
        }}
      >
        <View
          style={{ width: overlayHorizontalWidth, height: TARGET_SQUARE_SIZE, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
        <View style={[styles.qrSquare, { width: TARGET_SQUARE_SIZE, height: TARGET_SQUARE_SIZE }]} />
        <View
          style={{ width: overlayHorizontalWidth, height: TARGET_SQUARE_SIZE, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
      </View>
      <View style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>Scan the QR code</Text>
          <Text
            style={styles.instructionDesc}
            onPress={() => {
              Linking.openURL('https://www.singpass.gov.sg/main/security/?show=staying-vigilant#top');
            }}
          >
            How can I keep my account safe?
          </Text>
        </View>
      </View>

      <View style={styles.overlay} />
    </View>
  );
};

export default ScanPage;
