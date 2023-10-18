import { View } from 'react-native';
import { HorizontalCardSelection } from './HorizontalCardSelection';
import { useState } from 'react';
import { CARDS } from './constants';
import { MyCardsHeader } from './MyCardsHeader';
import { styles } from './styles';
import { CardCarousel } from './CardCarousel';

export const MyCards = () => {
  const [selectedCard, setSelectedCard] = useState(CARDS.NRIC);

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
    </View>
  );
};
