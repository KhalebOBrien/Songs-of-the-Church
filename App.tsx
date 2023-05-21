import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HymnalIndexScreen from './src/screens/HymnalIndexScreen';
import HymnViewScreen from './src/screens/HymnViewScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppThemeStyles from './src/utilities/styles';

const App = (): React.JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Hymnal Index"
            component={HymnalIndexScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Hymn View"
            component={HymnViewScreen}
            options={{
              title: 'Back',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: AppThemeStyles.appHeaderStyle.backgroundColor
              },
              headerTitleStyle: {
                fontFamily: AppThemeStyles.appHeaderStyle.fontFamily,
                fontSize: AppThemeStyles.appHeaderStyle.fontSize,
                color: AppThemeStyles.textColor.color
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
