import { ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { SearchBar } from '../../components/SearchBar';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchInboxItems } from '../../api/inbox';
import { Colors, INBOX_ITEMS_PER_PAGE, INBOX_ITEM_HEIGHT } from '../../constants';
import { InboxMessages, db } from '../../../db/db';
import colors from '../../constants/colors';
import { InboxItem } from '../../feature/inbox/InboxItem';
import { useAppSelector } from '../../store';
import { selectDeletedItemIds } from '../../store/slices/inboxSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const InboxPage = () => {
  const [data, setData] = useState<InboxMessages[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const deletedItemIds = useAppSelector(selectDeletedItemIds);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMoreData, setHasMoreData] = useState(true);

  const mockFetchData = useCallback(
    async (isInitialFetch?: boolean, searchQuery?: string) => {
      if (loading) {
        return;
      }
      !refreshing && setLoading(true);
      const newData = await fetchInboxItems(
        INBOX_ITEMS_PER_PAGE,
        isInitialFetch ? 0 : offset,
        deletedItemIds,
        searchQuery
      );
      if (newData.length < INBOX_ITEMS_PER_PAGE) {
        setHasMoreData(false);
      } else {
        setHasMoreData(true);
      }
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
    await mockFetchData(true, searchQuery);
    setRefreshing(false);
  }, [searchQuery]);

  const fetchMoreData = () => {
    const listEnded =
      !hasMoreData ||
      data.length >= db.inboxMessages.length - deletedItemIds.length ||
      offset > db.inboxMessages.length;
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
    mockFetchData(offset === 0, searchQuery);
  }, [offset, searchQuery]);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.ellipsesContainer}>
          <TouchableOpacity
            onPress={() => {
              Toast.show({
                type: 'success',
                text1: `Nothing here :)`,
              });
            }}
          >
            <MaterialCommunityIcons name="dots-horizontal" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <Text style={styles.inboxHeaderText}>Inbox</Text>
        <Text style={styles.inboxDescText}>
          These are copies of government messages that were sent to your mobile number.
        </Text>
        <View style={styles.searchBarContainer}>
          <SearchBar
            onSearch={(newQuery) => {
              setSearchQuery((prev) => {
                if (prev !== newQuery) {
                  setOffset(0);
                }
                return newQuery;
              });
            }}
          />
        </View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          data={data.filter((item) => !deletedItemIds.includes(item.id))}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <InboxItem item={item} />}
          ListHeaderComponent={renderHeader()}
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
            loading && !refreshing ? (
              <ActivityIndicator style={{ marginTop: 4 }} size="large" color={colors.primaryRed} />
            ) : null
          }
          ListEmptyComponent={<Text style={styles.emptyText}>Oops, nothing here</Text>}
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
    <SafeAreaView edges={['left', 'right', 'top']} style={styles.safeAreaViewContainer}>
      {renderList()}
    </SafeAreaView>
  );
};

export default InboxPage;
