import {View, Text, StyleSheet} from 'react-native';
import AppSearchBox from './AppSearchBox';
import AppViewName from './AppViewName';
import AppThemeStyles from '../utilities/styles';
import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';

export interface AppHeaderProps {
  currentView: string;
  button?: string;
}

const AppHeader = (props: AppHeaderProps): JSX.Element => {
  return (
    <View>
      <Text style={[AppThemeStyles.textColor, styles.heading]}>Songs Of the Church</Text>
      <AppSearchBox/>
      <AppViewName {...props}/>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.MONTSERRAT_600,
    fontSize: Size.calcWidth(24),
    fontWeight: '600',
    marginHorizontal: Size.calcWidth(18),
    flex: 1,
  },
});