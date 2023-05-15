import {View, Text, StyleSheet} from 'react-native';

export interface AppViewProps {
  currentView: string;
  button?: string;
}

const AppViewName = ({currentView, button}: AppViewProps): JSX.Element => {
  return (
    <View>
      <Text>{currentView}</Text>
      <Text>{button}</Text>
    </View>
  );
};

export default AppViewName;
