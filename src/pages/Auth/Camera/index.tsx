import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  Camera as CameraComponent,
  useCameraDevices,
} from 'react-native-vision-camera';

import * as S from './styles';

export const Camera: React.FC = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    async function handlePermissions() {
      await CameraComponent.requestCameraPermission();
      await CameraComponent.requestMicrophonePermission();
    }

    handlePermissions();
  }, []);

  function handleShowCamera() {
    if (device == null) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <CameraComponent
        style={StyleSheet.absoluteFill}
        device={device}
        preset="medium"
        isActive={true}
      />
    );
  }

  return (
    <S.Container>
      {handleShowCamera()}

      <S.ButtonCapture>
        <S.IconButton name="camera" size={26} color={'#000'} />
      </S.ButtonCapture>
    </S.Container>
  );
};
