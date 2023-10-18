import React from 'react';
import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { formatUnixTimestampToFullTime } from '../../utils/datetime';
import { ActionBar } from '../../components/ActionBar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { InboxMessages } from '../../../db/db';

const InboxDetailsPage = ({ route }) => {
  const { item }: { item: InboxMessages } = route.params;
  const { date, body, sender } = item;
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
          onPress: () => {},
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeAreaViewTop} />
      <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
        <ActionBar
          leftIcon={<Ionicons name="arrow-back" size={24} color={Colors.black} />}
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          title={sender}
          rightIcon={<FontAwesome name="trash-o" size={24} color={Colors.black} />}
          onRightIconPress={showDeleteConfirmation}
        />
        {renderMessageDate()}
        {renderMessageBody()}
      </SafeAreaView>
    </>
  );
};

export default InboxDetailsPage;
