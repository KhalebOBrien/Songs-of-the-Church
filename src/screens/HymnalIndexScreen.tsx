import React from 'react';
import {ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import AppScreen from '../components/AppScreen';
import AppHymnItem from '../components/AppHymnItem';
import hymnIndex from '../assets/data/hymnIndex';
// import HymnViewScreen from './HymnViewScreen';

const HymnalIndexScreen = (): React.JSX.Element => {

  // const callback = (dir: string) => {
  //   console.log('hereeee...');
  //   return (
  //     <HymnViewScreen dir={dir} />
  //   )
  // }

  return (
    <AppScreen>
      <AppHeader currentView="All Hymns" button="View Recent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {hymnIndex.map((hymn, index) => {
          return (
            <AppHymnItem
              key={index}
              num={hymn.num}
              title={hymn.title}
              dir={hymn.dir}
              // loadHymn={callback}
            />
          );
        })}
      </ScrollView>
    </AppScreen>
  );
}

export default HymnalIndexScreen;
