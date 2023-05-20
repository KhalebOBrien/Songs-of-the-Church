import {Text, TextProps} from 'react-native';

import colors from '../configs/colors';
import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';
// import {useThemeStore} from '@src/store/themeStore';

const AppText = ({children, style, ...otherProps}: TextProps) => {
  // const {isDarkMode} = useThemeStore();
  const isDarkMode = false;
  return (
    <Text
      style={[
        {
          fontSize: Size.calcWidth(16),
          fontFamily: fonts.MONTSERRAT_600,
          color: isDarkMode ? colors.white100 : colors.purple900,
        },
        style,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
