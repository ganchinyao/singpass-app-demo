import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ShortcutsCarousel } from './ShortcutsCarousel';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

export const ShortCuts = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.shortcutsTitle}>Last used shortcuts</Text>
      <ShortcutsCarousel />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.ALL_SHORTCUTS);
        }}
      >
        <Text style={styles.viewAllShortcutsText}>View all shortcuts</Text>
      </TouchableOpacity>
    </View>
  );
};
