import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: Colors.white,
    paddingTop: 24,
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  loginTitle: {
    fontSize: Fonts.large,
  },
  loginCompany: {
    fontWeight: 'bold',
    fontSize: Fonts.xlarge,
    textAlign: 'center',
    marginTop: 8,
  },
  loginAsContainer: {
    marginTop: 24,
  },
  loginAsPersonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.grey['100'],
    borderRadius: 8,
    marginTop: 8,
  },
  loginAsImage: {
    marginLeft: 8,
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 10,
  },
  loginAsName: {},
  loginContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: Colors.grey['100'],
    borderRadius: 8,
    marginTop: 12,
  },
  loginContentText: {
    fontWeight: 'bold',
    fontSize: Fonts.medium,
  },
  loginCTAContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  normalLoginDate: {
    color: Colors.grey['500'],
    fontSize: Fonts.small,
  },
});
