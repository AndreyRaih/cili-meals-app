import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraScreen from '@screens/cameraScreen';
import RecognizeLoaderScreen from '@screens/recognizeLoaderScreen';
import ResultScreen from '@screens/resultScreen';

import { Provider } from 'mobx-react';
import store from './src/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            initialRouteName="Result"
            screenOptions={{gestureEnabled: false}}
          >
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="RecognizeLoader" component={RecognizeLoaderScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
