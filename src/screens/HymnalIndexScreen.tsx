import React from 'react';
import {View, Text} from 'react-native';
import AppHeader from '../components/AppHeader';
import styles from '../utilities/styles';
import AppScreen from '../components/AppScreen';

const HymnalIndexScreen = (): React.JSX.Element => {
  return (
    <AppScreen>
      <View>
        <AppHeader currentView='All Hymns' button='View Recent' />
        <Text style={[styles.text, styles.textColor]} >Hymnal Index Screen</Text>
      </View>
    </AppScreen>
  );
};

export default HymnalIndexScreen;
