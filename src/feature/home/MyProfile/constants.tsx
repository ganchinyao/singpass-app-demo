import { AntDesign, Ionicons, Feather, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';

export enum MY_PROFILE_ITEMS {
  DOCUMENTS = 'Documents',
  PERSONAL = 'Personal',
  FINANCE = 'Finance',
  VEHICLE_DRIVING_LICENSE = 'Vehicle & Driving License',
  FAMILY = 'Family',
  EDUCATION = 'Education',
  PROPERTY = 'Property',
  NS_BENEFITS = 'NS Benefits',
}

export const IconsMap = {
  [MY_PROFILE_ITEMS.DOCUMENTS]: <AntDesign name="folder1" size={24} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.PERSONAL]: <Ionicons name="person-outline" size={24} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.FINANCE]: <Feather name="dollar-sign" size={24} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.VEHICLE_DRIVING_LICENSE]: <Ionicons name="car-outline" size={32} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.FAMILY]: <MaterialIcons name="family-restroom" size={24} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.EDUCATION]: <Ionicons name="school-outline" size={24} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.PROPERTY]: <FontAwesome name="building-o" size={24} color={Colors.red['300']} />,
  [MY_PROFILE_ITEMS.NS_BENEFITS]: <MaterialCommunityIcons name="medal-outline" size={24} color={Colors.red['300']} />,
};
