import {Text, TextProps, StyleSheet} from 'react-native';

import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';
import AppThemeStyles from '../utilities/styles';

const AppText = ({children, style, ...otherProps}: TextProps) => {
  return (
    <Text
      style={[
        AppThemeStyles.textColor,
        styles.text,
        style,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: Size.calcWidth(16),
    fontFamily: fonts.MONTSERRAT_600,
  }
});
