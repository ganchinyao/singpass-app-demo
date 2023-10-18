import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { SearchBar } from '../../components/SearchBar';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchInboxItems } from '../../api/inbox';
import { Colors, INBOX_ITEMS_PER_PAGE, INBOX_ITEM_HEIGHT } from '../../constants';
import { InboxMessages, db } from '../../../db/db';
import colors from '../../constants/colors';
import { InboxItem } from '../../feature/inbox/InboxItem';

const InboxPage = () => {
  const [data, setData] = useState<InboxMessages[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  console.log('### data length', data.length, offset);

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

  const fetchMoreData = () => {
    const listEnded = data.length >= db.inboxMessages.length;
    if (loading || listEnded) {
      return;
    }
    setOffset((prevOffset) => prevOffset + INBOX_ITEMS_PER_PAGE);
  };

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset > 400) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const handleBackToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

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
        <Text style={styles.inboxDescText}>
          These are copies of government messages that were sent to your mobile number.
        </Text>
        <View style={styles.searchBarContainer}>
          <SearchBar onSearch={() => {}} />
        </View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <InboxItem item={item} />}
          refreshControl={
            <RefreshControl
              colors={[Colors.primaryRed, Colors.primaryRed]}
              tintColor={Colors.primaryRed}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
          getItemLayout={(data, index) => ({ length: INBOX_ITEM_HEIGHT, offset: INBOX_ITEM_HEIGHT * index, index })}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.7}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ListFooterComponent={
            loading ? <ActivityIndicator style={{ marginTop: 4 }} size="large" color={colors.primaryRed} /> : null
          }
        />
        {showBackToTop && (
          <TouchableOpacity style={styles.backToTopButton} onPress={handleBackToTop} activeOpacity={0.9}>
            <Feather name="arrow-up" size={24} color={Colors.primaryRed} />
          </TouchableOpacity>
        )}
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
