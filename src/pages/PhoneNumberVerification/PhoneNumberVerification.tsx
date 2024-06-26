import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, Image, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { ActionButton } from '../../components/ActionButton';
import VerifyPhoneNumberImage from '../../../assets/images/verify_phone.png';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Colors, QR_TYPES, ROUTES } from '../../constants';
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';
import { delay } from '../../utils';
import { setHasVerifiedPhoneNumber } from '../../utils/auth';

const PhoneVerificationScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigation = useNavigation();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpRefs = Array.from({ length: 6 }).map(() => useRef(null));
  const [isVerified, setIsVerified] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const mobileWithCountryCode = parsePhoneNumberFromString(phoneNumber, 'SG');

  const handleSendOtp = async () => {
    if (phoneNumber && mobileWithCountryCode.isValid()) {
      setIsPhoneNumberValid(true);
      setIsLoading(true);
      await delay(500); // Just to mimic API call and show loading
      setIsLoading(false);
      setOtpSent(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const handleInputChange = (value: string, index: number) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      // Focus next input after current one is filled
      if (index < 5 && value) {
        otpRefs[index + 1].current.focus();
      }

      // If it's the last input and has value, handle verification here
      if (index === 5 && value) {
        setIsLoading(true);
        setHasVerifiedPhoneNumber(true).then(() => {
          delay(500).then(() => {
            setIsLoading(false);
            setIsVerified(true);
            setTimeout(() => {
              setIsVerified(false);
              navigation.navigate(ROUTES.QR_CONFIRMATION, { qrType: QR_TYPES.NORMAL });
            }, 2000);
          });
        });
      }

      return newOtp;
    });
  };

  const handleOTPResend = async () => {
    setIsLoading(true);
    await delay(500);
    setIsLoading(false);
    Toast.show({
      type: 'success',
      text1: 'A new OTP has been sent to you.',
    });
  };

  const onBackPress = () => {
    if (otpSent) {
      setOtpSent(false);
    } else {
      navigation.goBack();
    }
  };

  const handlePhoneNumberChange = (text) => {
    const formatter = new AsYouType('SG');
    const formatted = formatter.input(text);
    setPhoneNumber(formatted);
  };

  const handleBackspace = (index: number) => {
    const newOtp = [...otp];

    if (!newOtp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
      newOtp[index - 1] = ''; // clear the previous input value
      setOtp(newOtp);
    }
  };

  const renderEnterPhoneNumber = () => {
    return (
      <View style={styles.enterOtpContainer}>
        <Text style={styles.enterPhoneNumberTitle}>Enter your Phone Number</Text>
        <Text style={styles.enterPhoneNumberDesc}>We will send you an OTP to verify it</Text>
        <TextInput
          placeholder="9123 4567"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="phone-pad"
          style={styles.phoneNumberInput}
        />
        {!isPhoneNumberValid && (
          <Text style={styles.invalidPhoneNumber}>Please enter a valid Singapore phone number</Text>
        )}
        <KeyboardAvoidingView style={{ flex: 1, marginTop: isPhoneNumberValid ? 28 : 12 }}>
          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.primaryRed} />
          ) : (
            <ActionButton title="SEND OTP" onPress={handleSendOtp} gradientColor={['#4CAF50', '#388E3C']} />
          )}
        </KeyboardAvoidingView>
      </View>
    );
  };

  const renderInputOTP = () => {
    return (
      <>
        <Text style={styles.otpSentTitle}>
          {'We have sent an OTP to '}
          <Text style={{ fontWeight: 'bold' }}>{mobileWithCountryCode?.formatNational()}</Text>
          {'. Please key in your OTP within the next 2 minutes.'}
        </Text>
        <View style={styles.otpInputContainer}>
          {Array.from({ length: 6 }).map((_, index) => (
            <TextInput
              key={index}
              value={otp[index]}
              ref={otpRefs[index]}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(value) => handleInputChange(value, index)}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
            />
          ))}
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.primaryRed} />
        ) : (
          <Button title="Resend OTP" onPress={handleOTPResend} />
        )}
      </>
    );
  };

  const renderOtpVerificationSuccessNavigation = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={styles.successfulOtpText}>{`Successfully verified OTP,\nnavigating back`}</Text>
        <ActivityIndicator size="large" color={Colors.primaryRed} />
      </View>
    );
  };

  return (
    <ActionBarContainer hideBorder={true} onLeftIconPress={onBackPress}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}></View>
        <Image source={VerifyPhoneNumberImage} style={styles.verifyPhoneNumberImage} />
        <View style={styles.bodyContainer}>
          {isVerified
            ? renderOtpVerificationSuccessNavigation()
            : !otpSent
            ? renderEnterPhoneNumber()
            : renderInputOTP()}
        </View>
      </View>
    </ActionBarContainer>
  );
};

export default PhoneVerificationScreen;
