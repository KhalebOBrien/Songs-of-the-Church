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
  screenColor?: string;
}

const AppScreen = (props: ScreenProps): React.JSX.Element => {
  const {
    children,
    style,
    containerStyle,
    showBackHeader,
  } = props;

  return (
    <SafeAreaView style={[AppThemeStyles.appScreen, containerStyle]}>
      <StatusBar
        animated={true}
        hidden={true}
      />
      {showBackHeader && <AppBackHeader title="Back" />}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[AppThemeStyles.view, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppScreen;
