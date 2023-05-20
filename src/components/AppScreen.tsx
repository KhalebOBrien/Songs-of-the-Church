import {
  SafeAreaView,
  ViewProps,
  ScrollView,
  ViewStyle,
  StatusBar,
} from 'react-native';

import AppBackHeader from './AppBackHeader';
import React from 'react';
import AppThemeStyles from '../utilities/styles';

interface ScreenProps extends ViewProps {
  containerStyle?: ViewStyle;
  showBackHeader?: boolean;
  isScrollable?: boolean;
}

const AppScreen = (props: ScreenProps): React.JSX.Element => {
  const {
    children,
    style,
    containerStyle,
    showBackHeader,
    isScrollable
  } = props;

  return (
    <SafeAreaView style={[AppThemeStyles.appScreen, containerStyle]}>
      <StatusBar
        animated={true}
        hidden={true}
      />
      {showBackHeader && <AppBackHeader title="Back" />}

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
