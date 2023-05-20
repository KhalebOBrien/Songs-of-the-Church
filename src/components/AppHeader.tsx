import {View, Text, StyleSheet} from 'react-native';
import AppSearchBox from './AppSearchBox';
import AppThemeStyles from '../utilities/styles';
import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';

export interface AppHeaderProps {
  currentView: string;
  button?: string;
}

const AppHeader = (props: AppHeaderProps): JSX.Element => {
  return (
    <View style={AppThemeStyles.headerStyle}>
      <Text style={[AppThemeStyles.textColor, styles.heading]}>
        Songs Of the Church
      </Text>
      
      <AppSearchBox />

      <View style={styles.titleRow}>
        <Text style={[AppThemeStyles.textColor, styles.text1]}>
          {props.currentView}
        </Text>
        <Text style={[AppThemeStyles.textColor, styles.text2]}>
          {props.button}
        </Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.MONTSERRAT_600,
    fontSize: 24,
    fontWeight: '600',
    flex: 1,
    marginTop: Size.calcWidth(30),
  },
  titleRow: {
    flexDirection: 'row',
    marginTop: 36,
  },
  text1: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.MONTSERRAT_600,
  },
  text2: {
    textDecorationLine: 'underline',
    fontFamily: fonts.MONTSERRAT_600,
    fontSize: 16,
  },
});
