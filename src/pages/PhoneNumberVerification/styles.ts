import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  verifyPhoneNumberImage: {
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    width: 140,
    height: 140,
    zIndex: 1,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    marginTop: 80,
  },
  enterOtpContainer: {
    width: '80%',
  },
  enterPhoneNumberTitle: {
    fontSize: Fonts.medium,
    color: Colors.text,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  enterPhoneNumberDesc: {
    fontSize: Fonts.medium,
    color: Colors.text,
    marginTop: 12,
    textAlign: 'center',
  },
  phoneNumberInput: {
    marginTop: 20,
    fontSize: Fonts.medium,
    backgroundColor: Colors.grey['100'],
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.border,
    paddingLeft: 20,
  },
  otpSentTitle: {
    color: Colors.text,
    marginTop: 12,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  otpInputContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  otpInput: {
    marginTop: 20,
    marginBottom: 26,
    fontSize: Fonts.medium,
    backgroundColor: Colors.grey['100'],
    width: 48,
    height: 72,
    textAlign: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.border,
    marginRight: 8,
  },
  successfulOtpText: {
    marginBottom: 16,
    textAlign: 'center',
    color: Colors.text,
    fontSize: Fonts.medium,
  },
  invalidPhoneNumber: {
    color: Colors.primaryRed,
    fontSize: Fonts.small,
    marginTop: 4,
  },
});
