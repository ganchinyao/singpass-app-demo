import { FlatList, View } from 'react-native';
import { IconsMap, MY_PROFILE_ITEMS } from './constants';
import { RoundedIconWithText } from '../../../components/RoundedIconWithText';
import { Colors } from '../../../constants';
import { ReactElement, ReactNode } from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';

const GridItem = ({ item }: { item: { text: string; icon: ReactNode } }) => {
  const { icon, text } = item;
  return (
    <View style={{ flex: 1 / 3, alignItems: 'center', paddingVertical: 16 }}>
      <RoundedIconWithText
        icon={icon}
        text={text}
        customStyle={{ backgroundColor: Colors.grey['50'] }}
        onPress={() => {
          Toast.show({
            type: 'success',
            text1: `${text} :)`,
          });
        }}
      />
    </View>
  );
};

type MyProfileGridProps = {
  header?: ReactElement;
};

export const MyProfileGrid = ({ header }: MyProfileGridProps) => {
  const data = Object.keys(MY_PROFILE_ITEMS).map((key) => ({
    text: MY_PROFILE_ITEMS[key],
    icon: IconsMap[MY_PROFILE_ITEMS[key]],
  }));

  return (
    <FlatList
      data={data}
      ListHeaderComponent={header}
      renderItem={({ item }) => <GridItem key={item.text} item={item} />}
      keyExtractor={(item) => item.text}
      numColumns={3}
      contentContainerStyle={styles.myProfileGridContentContainer}
    />
  );
};
