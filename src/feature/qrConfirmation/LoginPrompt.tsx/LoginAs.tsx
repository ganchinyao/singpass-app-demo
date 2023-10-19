import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import DemoProfilePic from '../../../../assets/images/demo_profile_pic.png';
import { db } from '../../../../db/db';

export const LoginAs = () => {
  return (
    <View style={styles.loginAsContainer}>
      <Text>Logging in as</Text>
      <View style={styles.loginAsPersonContainer}>
        <Image source={DemoProfilePic} style={styles.loginAsImage} />
        <Text style={styles.loginAsName}>{db.name}</Text>
      </View>
    </View>
  );
};
