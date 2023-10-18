import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SearchBar } from '../../components/SearchBar';

const InboxPage = () => {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.ellipsesContainer}>
          <MaterialCommunityIcons name="dots-horizontal" size={24} color={Colors.black} />
        </View>
        <Text style={styles.inboxHeaderText}>Inbox</Text>
        <View style={styles.searchBarContainer}>
          <SearchBar onSearch={() => {}} />
        </View>
      </View>
    );
  };
  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

export default InboxPage;
