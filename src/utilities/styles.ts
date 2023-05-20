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
  title: {
    fontFamily: fonts.MONTSERRAT_600,
    fontSize: Size.calcWidth(20),
    marginHorizontal: Size.calcWidth(18),
    flex: 1,
    color: isDarkMode ? colors.white100 : colors.purple900,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Size.calcHeight(70),
    position: 'relative',
  },
  
  appScreen: {
    flex: 1,
    backgroundColor: isDarkMode ? colors.blue900 : colors.white100,
    paddingHorizontal: Size.calcWidth(20),
  },
  view: {
    flex: 1,
  },
});

export default AppThemeStyles;
