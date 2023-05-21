import {
  SafeAreaView,
  ViewProps,
  ScrollView,
  ViewStyle,
  StatusBar,
} from 'react-native';

import React from 'react';
import AppThemeStyles from '../utilities/styles';

interface ScreenProps extends ViewProps {
  containerStyle?: ViewStyle;
  isScrollable?: boolean;
}

const AppScreen = (props: ScreenProps): React.JSX.Element => {
  const {
    children,
    style,
    containerStyle,
    isScrollable
  } = props;

  return (
    <SafeAreaView style={[AppThemeStyles.appScreen, containerStyle]}>
      <StatusBar
        animated={true}
        hidden={true}
      />

      {isScrollable && <ScrollView
        showsVerticalScrollIndicator={false}
        style={[AppThemeStyles.view, style]}>
        {children}
      </ScrollView>}

      {!isScrollable && children}
    </SafeAreaView>
  );
};

export default AppScreen;
