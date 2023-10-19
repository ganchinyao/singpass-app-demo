import { Text, TouchableOpacity, View } from 'react-native';
import { InboxMessages } from '../../../db/db';
import { styles } from './styles';
import { convertUnixTimestampToRelativeTime } from '../../utils/datetime';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import { setInboxItemAsRead } from '../../api/inbox';
import { useAppDispatch, useAppSelector } from '../../store';
import { addReadItemsId, selectReadItemIds } from '../../store/slices/inboxSlice';
import { memo } from 'react';

type InboxItemProps = {
  item: InboxMessages;
};

export const InboxItem = memo(
  ({ item }: InboxItemProps) => {
    const { id, sender, body, date } = item;
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const readItemIds = useAppSelector(selectReadItemIds);
    const isRead = readItemIds.includes(id);
    const baseTextStyle = isRead ? styles.readText : styles.unreadText;

    const handleItemPress = (item: InboxMessages) => {
      setInboxItemAsRead(item.id);
      dispatch(addReadItemsId(item.id));
      navigation.navigate(ROUTES.INBOX_DETAILS, { item });
    };

    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View
          style={[styles.container, isRead ? styles.containerReadBackground : styles.containerUnreadBackground]}
          key={id}
        >
          <View style={styles.senderContainer}>
            <View style={styles.senderAndCircleContainer}>
              {!isRead && <View style={styles.unreadCircle}></View>}
              <Text style={[baseTextStyle, styles.senderTextStyle]}>{sender}</Text>
            </View>
            <Text style={baseTextStyle}>{convertUnixTimestampToRelativeTime(date)}</Text>
          </View>
          <Text numberOfLines={3} style={[baseTextStyle, styles.bodyTextStyle]}>
            {body.replace(/\n/g, ' ')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  (prevVal, currentVal) => {
    return prevVal.item.id === currentVal.item.id;
  }
);
