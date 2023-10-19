import { Text, View } from 'react-native';
import { styles } from './styles';
import { ShortcutsCarousel } from './ShortcutsCarousel';

export const ShortCuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.shortcutsTitle}>Last used shortcuts</Text>
      <ShortcutsCarousel />
      <Text style={styles.viewAllShortcutsText}>View all shortcuts</Text>
    </View>
  );
};
