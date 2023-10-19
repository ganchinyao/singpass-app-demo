import React from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { styles } from './styles';
import { formatUnixTimestampToFullTime } from '../../utils/datetime';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants';
import { InboxMessages } from '../../../db/db';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import { deleteInboxItem } from '../../api/inbox';
import { useAppDispatch } from '../../store';
import { addDeletedItemId } from '../../store/slices/inboxSlice';
import { useNavigation } from '@react-navigation/native';

const InboxDetailsPage = ({ route }) => {
  const { item }: { item: InboxMessages } = route.params;
  const { date, body, sender } = item;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const renderMessageDate = () => {
    return <Text style={styles.messageDate}>{formatUnixTimestampToFullTime(date)}</Text>;
  };

  const renderMessageBody = () => {
    return (
      <View style={styles.messageBodyContainer}>
        <Text style={styles.messageBodyText}>{body}</Text>
      </View>
    );
  };

  const showDeleteConfirmation = () => {
    Alert.alert(
      'Delete message',
      'Are you sure you want to permanently delete this message?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            deleteInboxItem(item.id);
            dispatch(addDeletedItemId(item.id));
            navigation.goBack();
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ActionBarContainer
      title={sender}
      rightIcon={<FontAwesome name="trash-o" size={24} color={Colors.black} />}
      onRightIconPress={showDeleteConfirmation}
    >
      <ScrollView>
        {renderMessageDate()}
        {renderMessageBody()}
      </ScrollView>
    </ActionBarContainer>
  );
};

export default InboxDetailsPage;
