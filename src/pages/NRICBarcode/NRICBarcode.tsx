import React from 'react';
import { View, Text, Image } from 'react-native';
import DemoBarCode from '../../../assets/images/demo_barcode.png';
import { styles } from './styles';
import { IdentityCard } from '../../components/IdentityCard';
import { CARDS } from '../../feature/home/MyCards/constants';
import { formatUnixTimestampToDate } from '../../utils/datetime';
import { ActionBarContainer } from '../../components/ActionBarContainer';

const NRICBarcodePage = () => {
  return (
    <ActionBarContainer hideBorder={true} title="NRIC">
      <View style={styles.barcodeContainer}>
        <Image source={DemoBarCode} style={styles.barcode} />
      </View>
      <View style={styles.cardContainer}>
        <IdentityCard text={CARDS.NRIC} customStyle={{ width: '100%', height: 220 }} />
        <Text style={styles.date}>{`Last updated on ${formatUnixTimestampToDate(Date.now() / 1000)}`}</Text>
      </View>
    </ActionBarContainer>
  );
};

export default NRICBarcodePage;
