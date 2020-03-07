import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';

import Constants from 'expo-constants';

import { useCheckPermissions } from '@hooks/useCheckPermissions';

import CameraButton from "@components/camera/cameraButton";
import CameraFocusArea from "@components/camera/cameraFocusArea";

export default function CameraScreen ({ navigation, store }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => setHasPermission(useCheckPermissions('CAMERA')), []);

  async function makePhoto () {
    if (camera) {
      const source = await camera.takePictureAsync();
      const imageAssetPath = Image.resolveAssetSource({ uri: source.uri });
      return imageAssetPath;
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View  style={{ flex: 2, marginTop: Constants.statusBarHeight }}>
      <Camera ref={elem => setCamera(elem)} style={{ flex: 2 }}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
          locations={[0, 0.2, 0.9]}
          style={{ position: 'absolute', width: '100%', height: '100%'}}>
        </LinearGradient>
        <CameraFocusArea />
        <CameraButton onCapture={() => makePhoto().then(photo => navigation.navigate('RecognizeLoader', { photo }))} />
      </Camera>
    </View>
  );
}