import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

import RootStack from './navigators/RootStack';
// import Welcome from './screens/Welcome';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RootStack />;
}
