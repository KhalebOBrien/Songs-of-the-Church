import {View, Pressable, ViewStyle, TextStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import AppText from './AppText';

// import fonts from '@src/configs/fonts';
import Size from '../utilities/useResponsiveSize';
import colors from '../configs/colors';
import React from 'react';
// import {useThemeStore} from '@src/store/themeStore';
import styles from '../utilities/styles';

export interface IAppBackHeader {
  isPaddedHorizontal?: boolean;
  title: string;
  arrowStyle?: TextStyle;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  rightIcon?: React.JSX.Element;
}

const AppBackHeader = ({
  title,
  style,
  titleStyle,
  isPaddedHorizontal,
  arrowStyle,
  rightIcon,
}: IAppBackHeader): React.JSX.Element => {
  const navigation = useNavigation();

  // const {toggleDarkMode, isDarkMode} = useThemeStore();
  const isDarkMode = false;
  // const styles = dynamicStyles(isDarkMode);

  const handleNavigation = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <View
      style={[
        isPaddedHorizontal && {paddingHorizontal: Size.calcWidth(24)},
        styles.container,
        style,
      ]}>
      <Pressable hitSlop={Size.calcAverage(20)} onPress={handleNavigation}>
        <Icon
          name="arrowleft"
          size={Size.calcAverage(24)}
          style={[{color: colors.white100}, arrowStyle]}
        />
      </Pressable>
      <AppText style={[styles.title, titleStyle]}>
        {title}
      </AppText>

      {rightIcon}
    </View>
  );
};

export default AppBackHeader;
