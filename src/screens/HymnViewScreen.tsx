import React from 'react';
import {View, Text} from 'react-native';
import AppThemeStyles from '../utilities/styles';
import AppScreen from '../components/AppScreen';

const HymnViewScreen = (): React.JSX.Element => {
  return (
    <AppScreen showBackHeader isScrollable>
      <View>
        <Text style={[AppThemeStyles.text, AppThemeStyles.textColor]} >Hymnal View Screen</Text>
      </View>
    </AppScreen>
  );
};

export default HymnViewScreen;
