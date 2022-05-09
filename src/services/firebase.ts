import messaging from '@react-native-firebase/messaging';

export const getDeviceToken = async () => {
  return await messaging().getToken();
}