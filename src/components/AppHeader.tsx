import {View, Text, StyleSheet} from 'react-native';
import AppSearchBox from './AppSearchBox';
import AppViewName from './AppViewName';

export interface AppHeaderProps {
  currentView: string;
  button?: string;
}

const AppHeader = (props: AppHeaderProps): JSX.Element => {
  return (
    <View>
      <Text>Songs Of the Church</Text>
      <AppSearchBox/>
      <AppViewName {...props}/>
    </View>
  );
};

export default AppHeader;
