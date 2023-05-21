import React from 'react';
import {View, Text} from 'react-native';
import AppThemeStyles from '../utilities/styles';
import AppScreen from '../components/AppScreen';

export interface IHymnViewScreen {
  dir?: string;
}

const HymnViewScreen = (props: IHymnViewScreen): React.JSX.Element => {
  return (
    <AppScreen isScrollable>
      <View>
        <Text style={[AppThemeStyles.text, AppThemeStyles.textColor]} >Hymnal View Screen</Text>
        <Text>{props.dir}</Text>
      </View>
    </AppScreen>
  );
}

export default HymnViewScreen;
