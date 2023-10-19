import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { RoundedIconWithText } from '../../../components/RoundedIconWithText';
import Toast from 'react-native-toast-message';
import { CAROUSEL_SHORTCUTS, IconsMap } from './constants';

export const ShortcutsCarousel = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.shortcutCarouselContainer}
      contentContainerStyle={styles.shortcutCarouselContentContainer}
    >
      {Object.values(CAROUSEL_SHORTCUTS).map((item) => {
        return (
          <View key={item} style={styles.shortcutIconContainer}>
            <RoundedIconWithText
              text={item}
              icon={IconsMap[item]}
              customStyle={styles.iconContainer}
              onPress={() => {
                Toast.show({
                  type: 'success',
                  text1: `${item} :)`,
                });
              }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
