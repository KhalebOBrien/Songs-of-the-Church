import {View, Text, StyleSheet, TextInput, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AppThemeStyles from '../utilities/styles';
import fonts from '../configs/fonts';
import colors from '../configs/colors';
import Size from '../utilities/useResponsiveSize';

const AppSearchBox = (): JSX.Element => {
  return (
    <View style={styles.box}>
      <Icon name='search1' size={24} style={[AppThemeStyles.textColor, styles.icon]} />
      <TextInput placeholder='Search here...' placeholderTextColor={colors.purple900} style={[AppThemeStyles.textColor, styles.inputStyle]} />
    </View>
  );
};

export default AppSearchBox;

const styles = StyleSheet.create({
  box: {
    flexDirection:"row",
    backgroundColor: colors.purple200,
    height: 52,
    borderRadius: 10,
    textAlignVertical: 'center',
    alignContent: 'center',
    marginTop: 22
  },
  inputStyle: {
    fontWeight: '500',
    fontFamily: fonts.MONTSERRAT_500,
    fontSize: 18,
    marginLeft: 20,
    flex: 1
  },
  icon: {

  }
});
