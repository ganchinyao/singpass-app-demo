import React from 'react';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { MyProfileGrid } from '../../feature/home/MyProfile/MyProfileGrid';

const MyProfilePage = () => {
  const renderHeader = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.myProfileTitle}>My Profile</Text>
        <Text style={styles.myProfileDesc}>
          {`Your personal data at your fingertips.\nPre-fill forms in one click with MyInfo.`}
        </Text>
      </View>
    );
  };

  const renderMyProfileGrid = () => {
    return (
      <View style={styles.myProfileGridContainer}>
        <MyProfileGrid header={renderHeader()} />
      </View>
    );
  };

  return <ActionBarContainer>{renderMyProfileGrid()}</ActionBarContainer>;
};

export default MyProfilePage;
