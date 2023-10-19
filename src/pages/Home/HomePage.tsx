import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { db } from '../../../db/db';
import { AntDesign } from '@expo/vector-icons';
import { MyCards } from '../../feature/home/MyCards';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyProfile } from '../../feature/home/MyProfile';
import { ShortCuts } from '../../feature/home/Shortcuts';

const HomePage = () => {
  const navigation = useNavigation();

  const renderSettings = () => {
    return (
      <TouchableOpacity
        style={styles.settingsContainer}
        onPress={() => {
          navigation.navigate(ROUTES.SETTINGS);
        }}
      >
        <AntDesign name="setting" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  const renderGreetings = () => {
    return (
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingTitle}>Welcome back,</Text>
        <Text style={styles.grettingName}>{db.name}</Text>
      </View>
    );
  };

  const renderMyCards = () => {
    return <MyCards />;
  };

  const renderMyProfile = () => {
    return (
      <View style={[styles.contentMargin, styles.myProfileContainer]}>
        <MyProfile />
      </View>
    );
  };

  const renderLastUsedShortcuts = () => {
    return (
      <View style={styles.shortcutsContainer}>
        <ShortCuts />
      </View>
    );
  };

  return (
    <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        {renderSettings()}
        {renderGreetings()}
        {renderMyCards()}
        {renderMyProfile()}
        {renderLastUsedShortcuts()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
