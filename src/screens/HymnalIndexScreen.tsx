import {View, Text, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';

const HymnalIndexScreen = (): JSX.Element => {
  return (
    <View>
      <AppHeader currentView='All Hymns' button='View Recent' />
      <Text>HymnalIndexScreen</Text>
    </View>
  );
};

export default HymnalIndexScreen;
