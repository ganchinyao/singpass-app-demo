import { Text, TouchableOpacity, View } from 'react-native';
import { HorizontalCardSelection } from './HorizontalCardSelection';
import { useState } from 'react';
import { CARDS } from './constants';
import { MyCardsHeader } from './MyCardsHeader';
import { styles } from './styles';
import { CardCarousel } from './CardCarousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

export const MyCards = () => {
  const [selectedCard, setSelectedCard] = useState(CARDS.NRIC);
  const navigation = useNavigation();

  const renderShowBarcode = () => {
    return (
      <TouchableOpacity
        style={styles.showBarcodeContainer}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(ROUTES.NRIC_BARCODE);
        }}
      >
        <MaterialCommunityIcons name="barcode" size={32} color="black" />
        <Text style={styles.showBarcodeTitle}>Show barcode</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <MyCardsHeader />
      <HorizontalCardSelection
        selectedCard={selectedCard}
        setSelectedCard={(card) => {
          setSelectedCard(card);
        }}
      />
      <CardCarousel
        selectedCard={selectedCard}
        setSelectedCard={(card) => {
          setSelectedCard(card);
        }}
      />
      {renderShowBarcode()}
    </View>
  );
};
