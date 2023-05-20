import React from 'react';
import {View, Text} from 'react-native';
import styles from '../utilities/styles';
import AppScreen from '../components/AppScreen';

const HymnViewScreen = (): React.JSX.Element => {
  return (
    <AppScreen showBackHeader>
      <View>
        <Text style={[styles.text, styles.textColor]} >Hymnal View Screen</Text>
      </View>
    </AppScreen>
  );
};

export default HymnViewScreen;
