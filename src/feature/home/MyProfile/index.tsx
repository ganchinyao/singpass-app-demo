import { View } from 'react-native';
import { MyProfileHeader } from './MyProfileHeader';
import { MyProfileCarousel } from './MyProfileCarousel';

export const MyProfile = () => {
  return (
    <View>
      <MyProfileHeader />
      <MyProfileCarousel />
    </View>
  );
};
