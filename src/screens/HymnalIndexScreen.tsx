import React from 'react';
import {View, Text} from 'react-native';
import AppHeader from '../components/AppHeader';
import styles from '../utilities/styles';
import AppScreen from '../components/AppScreen';
import AppHymnItem from '../components/AppHymnItem';
import hymnIndex from '../assets/data/hymnIndex';

const HymnalIndexScreen = (): React.JSX.Element => {
  return (
    <AppScreen>
      <View>
        <AppHeader currentView="All Hymns" button="View Recent" />
        <Text style={[styles.text, styles.textColor]}>Hymnal Index Screen</Text>
        {hymnIndex.map((hymn, index) => {
          return (
            <AppHymnItem key={index} num={hymn.num} title={hymn.title} dir={hymn.dir} />
          );
        })}
      </View>
    </AppScreen>
  );
};

export default HymnalIndexScreen;
