import React from 'react';
import {View, Text} from 'react-native';
import AppThemeStyles from '../utilities/styles';
import AppScreen from '../components/AppScreen';
import {useRoute} from '@react-navigation/native';
import AppHymnSlide from '../components/AppHymnSlide';

const HymnViewScreen = (): React.JSX.Element => {
  const route = useRoute();
  const {dir} = route.params;

  return (
    <AppScreen isScrollable>
      <View>
        <Text style={[AppThemeStyles.text, AppThemeStyles.textColor]}>
          Hymnal View Screen: {dir}
        </Text>
        <AppHymnSlide dir={dir} />
      </View>
    </AppScreen>
  );
};

export default HymnViewScreen;
