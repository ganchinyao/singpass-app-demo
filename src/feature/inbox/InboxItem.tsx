import { Text, TouchableOpacity, View } from 'react-native';
import { InboxMessages } from '../../../db/db';
import { styles } from './styles';
import { convertUnixTimestampToRelativeTime } from '../../utils/datetime';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';

type InboxItemProps = {
  item: InboxMessages;
};

export const InboxItem = ({ item }: InboxItemProps) => {
  const { id, sender, body, isRead, date } = item;
  const baseTextStyle = isRead ? styles.readText : styles.unreadText;
  const navigation = useNavigation();

  const handleItemPress = (item: InboxMessages) => {
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
            {!item.isRead && <View style={styles.unreadCircle}></View>}
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
};
