import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import AppThemeStyles from '../utilities/styles';

export interface AppViewProps {
  currentView: string;
  button?: string;
}

const AppViewName = ({currentView, button}: AppViewProps): React.JSX.Element => {
  return (
    <View>
      <Text>{currentView}</Text>
      <Text>{button}</Text>
    </View>
  );
};

export default AppViewName;
