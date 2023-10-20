import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from 'react-native-reanimated';
import { CARDS, CARD_WIDTH, SPACER_SIZE } from './constants';
import { styles } from './styles';

const data = [CARDS.NRIC, CARDS.DRIVING_LICENSE, CARDS.GOV_ID, CARDS.WHAT_IS_THIS];

const Card = ({ index, scrollX }) => {
  const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];
  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, inputRange, [0.85, 1.1, 0.85], 'clamp');
    return {
      transform: [{ scale }],
    };
  });
  const text = data[index];
  let backgroundColor;
  if (text === CARDS.NRIC) {
    backgroundColor = '#f1d3d7';
  } else if (text === CARDS.DRIVING_LICENSE) {
    backgroundColor = '#72a39f';
  } else if (text === CARDS.GOV_ID) {
    backgroundColor = '#ed6837';
  } else {
    backgroundColor = '#222222';
  }

  return (
    <Animated.View style={[styles.card, animatedStyles, { backgroundColor }]}>
      <Text style={styles.cardText}>{text}</Text>
    </Animated.View>
  );
};

type CardCarouselProps = {
  selectedCard: CARDS;
  setSelectedCard: (card: CARDS) => void;
};

export const CardCarousel = ({ selectedCard, setSelectedCard }: CardCarouselProps) => {
  const flatListRef = useRef(null);
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const scrollToCard = (index: number) => {
    flatListRef.current?.scrollToOffset({
      offset: index * CARD_WIDTH,
      animated: true,
    });
  };

  useEffect(() => {
    scrollToCard(data.findIndex((card) => card === selectedCard));
  }, [selectedCard]);

  return (
    <View style={styles.cardContainer}>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{ alignItems: 'center', paddingLeft: 20 }}
        renderItem={({ index, item }) => <Card key={item} index={index} scrollX={scrollX} />}
        keyExtractor={(item) => item}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ListHeaderComponent={<View style={{ width: SPACER_SIZE }} />}
        ListFooterComponent={<View style={{ width: SPACER_SIZE }} />}
        onMomentumScrollBegin={() => {
          setIsUserScrolling(true);
        }}
        onMomentumScrollEnd={() => {
          const index = Math.round(scrollX.value / CARD_WIDTH);
          if (isUserScrolling) {
            setSelectedCard(data[index]);
          }
          setIsUserScrolling(false);
        }}
      />
    </View>
  );
};
