import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SearchBar } from '../../components/SearchBar';
import { useCallback, useEffect, useState } from 'react';
import { fetchInboxItems } from '../../api/inbox';
import { Colors, INBOX_ITEMS_PER_PAGE } from '../../constants';
import { InboxMessages } from '../../../db/db';
import colors from '../../constants/colors';

const InboxPage = () => {
  const [data, setData] = useState<InboxMessages[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const mockFetchData = useCallback(
    async (isInitialFetch?: boolean) => {
      if (loading) {
        return;
      }
      !refreshing && setLoading(true);
      const newData = await fetchInboxItems(INBOX_ITEMS_PER_PAGE, isInitialFetch ? 0 : offset);
      if (isInitialFetch) {
        setOffset(0);
        setData(newData);
      } else {
        setData((prevData) => [...prevData, ...newData]);
      }
      !refreshing && setLoading(false);
    },
    [offset]
  );

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await mockFetchData(true);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    mockFetchData(offset === 0);
  }, [offset]);

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

  const renderList = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem} key={item.id}>
              <Text>{item.sender}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              colors={[Colors.primaryRed, Colors.primaryRed]}
              tintColor={Colors.primaryRed}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
          onEndReached={() => setOffset((prevOffset) => prevOffset + INBOX_ITEMS_PER_PAGE)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color={colors.primaryRed} /> : null}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderList()}
    </SafeAreaView>
  );
};

export default InboxPage;
