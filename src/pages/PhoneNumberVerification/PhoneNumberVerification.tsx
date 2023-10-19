import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, Image, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { ActionButton } from '../../components/ActionButton';
import VerifyPhoneNumberImage from '../../../assets/images/verify_phone.png';
import { ActionBarContainer } from '../../components/ActionBarContainer';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Colors, QR_TYPES, ROUTES } from '../../constants';

const PhoneVerificationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigation = useNavigation();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpRefs = Array.from({ length: 6 }).map(() => useRef(null));
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
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
        setIsVerified(true);
        setTimeout(() => {
          setIsVerified(false);
          navigation.navigate(ROUTES.QR_CONFIRMATION, { qrType: QR_TYPES.NORMAL });
        }, 2000);
      }

      return newOtp;
    });
  };

  const handleOTPResend = () => {
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
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.phoneNumberInput}
        />
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ActionButton title="SEND OTP" onPress={handleSendOtp} gradientColor={['#4CAF50', '#388E3C']} />
        </KeyboardAvoidingView>
      </View>
    );
  };

  const renderInputOTP = () => {
    return (
      <>
        <Text style={styles.otpSentTitle}>
          We have sent you an OTP. Please key in your OTP within the next 2 minutes.
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
        <Button title="Resend OTP" onPress={handleOTPResend} />
      </>
    );
  };

  const renderOtpVerificationSuccessNavigation = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <ActivityIndicator size="large" color={Colors.primaryRed} />
        <Text style={styles.successfulOtpText}>{`Successfully verified OTP,\nnavigating to login...`}</Text>
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
