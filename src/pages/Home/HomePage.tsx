import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { db } from '../../../db/db';
import { AntDesign } from '@expo/vector-icons';
import { MyCards } from '../../feature/home/MyCards';

const HomePage = () => {
  const renderSettings = () => {
    return (
      <View style={styles.settingsContainer}>
        <AntDesign name="setting" size={24} color="black" />
      </View>
    );
  };

  const renderGreetings = () => {
    return (
      <View>
        <Text style={styles.greetingTitle}>Welcome back,</Text>
        <Text style={styles.grettingName}>{db.name}</Text>
      </View>
    );
  };

  const renderMyCards = () => {
    return <MyCards />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderSettings()}
      {renderGreetings()}
      {renderMyCards()}
    </SafeAreaView>
  );
};

export default HomePage;
