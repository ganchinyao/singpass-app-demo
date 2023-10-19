import { Image, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import leftIconImage from '../../../../assets/images/singpass_icon.png';
import rightIconImage from '../../../../assets/images/ns_icon.png';
import { Colors } from '../../../constants';

const AccessLogos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={leftIconImage} style={styles.companyLogo} />
      </View>
      <View style={styles.arrowIcon}>
        <AntDesign name="arrowright" size={24} color={Colors.black} />
      </View>
      <View style={styles.circle}>
        <Image source={rightIconImage} style={styles.companyLogo} />
      </View>
    </View>
  );
};

export default AccessLogos;
