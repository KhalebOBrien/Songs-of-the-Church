import {Text, StyleSheet} from 'react-native';
import AppThemeStyles from '../utilities/styles';
import colors from '../configs/colors';
import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';
export interface IAppHymnItem {
  num?: string;
  title: string;
  dir?: string;
}

const AppHymnItem = ({
  num,
  title,
  dir
}: IAppHymnItem): JSX.Element => {
  return (
    <Text style={[AppThemeStyles.textColor, styles.text]}>{`${num} ${title}`}</Text>
  );
};

export default AppHymnItem;

const styles = StyleSheet.create({
  text: {
    height: Size.calcHeight(65),
    borderBottomColor: colors.purple200,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    textAlignVertical: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontFamily: fonts.MONTSERRAT_500,
    fontWeight: '500',
    paddingHorizontal: Size.calcWidth(20),
  }
});
