import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HymnalIndexScreen from './src/screens/HymnalIndexScreen';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = (): React.JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <HymnalIndexScreen />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
