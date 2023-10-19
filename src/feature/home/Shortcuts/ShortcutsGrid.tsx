import { FlatList, Linking, View } from 'react-native';
import { IconsMap, SHORTCUT_ITEMS, ShortcutsLinkMap } from './constants';
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
          Linking.openURL(ShortcutsLinkMap[text]);
        }}
      />
    </View>
  );
};

type ShortcutsGridProps = {
  header?: ReactElement;
};

export const ShortcutsGrid = ({ header }: ShortcutsGridProps) => {
  const data = Object.keys(SHORTCUT_ITEMS).map((key) => ({
    text: SHORTCUT_ITEMS[key],
    icon: IconsMap[SHORTCUT_ITEMS[key]],
  }));

  return (
    <FlatList
      data={data}
      ListHeaderComponent={header}
      renderItem={({ item }) => <GridItem key={item.text} item={item} />}
      keyExtractor={(item) => item.text}
      numColumns={3}
      contentContainerStyle={styles.shortcutsGridContentContainer}
    />
  );
};
