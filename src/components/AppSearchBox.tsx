import {View, Text, StyleSheet, TextInput, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AppThemeStyles from '../utilities/styles';
import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';

const AppSearchBox = (): JSX.Element => {
  return (
    <View>
      <Icon name='search1' size={24} style={AppThemeStyles.textColor} ></Icon>
      <TextInput placeholder='Search here...' />
      
    </View>
  );
};

export default AppSearchBox;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.MONTSERRAT_600,
    fontSize: Size.calcWidth(24),
    fontWeight: '600',
    marginHorizontal: Size.calcWidth(18),
    flex: 1,
  },
});
