import React from 'react';
import {View, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import AppScreen from '../components/AppScreen';
import AppHymnItem from '../components/AppHymnItem';
import hymnIndex from '../assets/data/hymnIndex';

const HymnalIndexScreen = (): React.JSX.Element => {
  return (
    <AppScreen>
      <AppHeader currentView="All Hymns" button="View Recent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {hymnIndex.map((hymn, index) => {
          return (
            <AppHymnItem key={index} num={hymn.num} title={hymn.title} dir={hymn.dir} />
          );
        })}
      </ScrollView>
    </AppScreen>
  );
};

export default HymnalIndexScreen;
