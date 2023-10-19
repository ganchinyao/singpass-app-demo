import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { IconsMap, MY_PROFILE_ITEMS } from './constants';
import { RoundedIconWithText } from '../../../components/RoundedIconWithText';
import Toast from 'react-native-toast-message';

export const MyProfileCarousel = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.myProfileCarouselContainer}
      contentContainerStyle={styles.myProfileCarouselContentContainer}
    >
      {Object.values(MY_PROFILE_ITEMS).map((item) => {
        return (
          <View key={item} style={styles.myProfileIconContainer}>
            <RoundedIconWithText
              text={item}
              icon={IconsMap[item]}
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
