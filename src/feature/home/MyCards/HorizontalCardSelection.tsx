import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Chip } from '../../../components/Chip';
import { CARDS } from './constants';

type HorizontalCardSelectionProps = {
  selectedCard: CARDS;
  setSelectedCard: (card: CARDS) => void;
};

export const HorizontalCardSelection = ({ selectedCard, setSelectedCard }: HorizontalCardSelectionProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.cardScrollViewContainer}
      contentContainerStyle={styles.cardScrollViewContentContainer}
    >
      {Object.values(CARDS).map((card) => {
        return (
          <Chip
            key={card}
            label={card}
            isSelected={selectedCard === card}
            onPress={() => {
              setSelectedCard(card);
            }}
          />
        );
      })}
    </ScrollView>
  );
};
