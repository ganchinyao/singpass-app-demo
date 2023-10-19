import * as LocalAuthentication from 'expo-local-authentication';

async function checkHardwareSupport() {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  if (!compatible) {
    console.log('Your device does not have TouchID or FaceID capabilities.');
    return false;
  }

  const biometricRecords = await LocalAuthentication.isEnrolledAsync();
  if (!biometricRecords) {
    console.log('No identities are enrolled.');
    return false;
  }

  const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
  if (supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
    console.log('FaceID is supported');
  } else if (supportedTypes.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
    console.log('TouchID is supported');
  } else {
    console.log('No biometric authentication is supported');
    return false;
  }

  return true;
}

export async function authenticate() {
  const hasSupport = await checkHardwareSupport();
  if (!hasSupport) {
    return false;
  }

  const result = await LocalAuthentication.authenticateAsync();
  if (result.success) {
    return true;
  }
  return false;
}
