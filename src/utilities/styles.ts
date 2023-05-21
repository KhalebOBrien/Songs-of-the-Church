import {StyleSheet} from 'react-native';
import colors from '../configs/colors';
import fonts from '../configs/fonts';
import Size from './useResponsiveSize';

const isDarkMode = false;

const AppThemeStyles = StyleSheet.create({
  textColor: {
    color: isDarkMode ? colors.white100 : colors.purple900,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  appHeaderStyle: {
    backgroundColor: isDarkMode ? colors.blue900 : colors.white100,
    fontFamily: fonts.MONTSERRAT_600,
    fontSize: 20,
    marginHorizontal: Size.calcWidth(18),
  },
  appScreen: {
    flex: 1,
    backgroundColor: isDarkMode ? colors.blue900 : colors.white100,
  },
  view: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: isDarkMode ? colors.blue900 : colors.purple100,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    paddingHorizontal: Size.calcWidth(20),
    paddingBottom: 26
  }
});

export default AppThemeStyles;
