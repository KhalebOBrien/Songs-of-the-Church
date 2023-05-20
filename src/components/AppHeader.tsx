import {View, Text, StyleSheet} from 'react-native';
import AppSearchBox from './AppSearchBox';
import AppViewName from './AppViewName';
import AppThemeStyles from '../utilities/styles';

export interface AppHeaderProps {
  currentView: string;
  button?: string;
}

const AppHeader = (props: AppHeaderProps): JSX.Element => {
  return (
    <View>
      <Text style={[AppThemeStyles.textColor, styles.title]}>Songs Of the Church</Text>
      <AppSearchBox/>
      <AppViewName {...props}/>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  title: {
  },
});