import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppThemeStyles from '../utilities/styles';
import colors from '../configs/colors';
import fonts from '../configs/fonts';
import Size from '../utilities/useResponsiveSize';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


export interface IAppHymnItem {
  num: string;
  title: string;
  dir: string;
}

const AppHymnItem = (props: IAppHymnItem): React.JSX.Element => {
  const navigation = useNavigation();

  const loadHymn = (dir: string) => {
    navigation.navigate('Hymn View', { dir });
  }

  return (
    <TouchableOpacity
      onPress={() => loadHymn(props.dir)}
    >
      <Text
        style={[AppThemeStyles.textColor, styles.text]}
      >{`${props.num} ${props.title}`}</Text>
    </TouchableOpacity>
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
  },
});
