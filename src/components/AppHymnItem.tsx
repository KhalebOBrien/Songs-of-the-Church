import {View, Text} from 'react-native';
import styles from '../utilities/styles';

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
    <Text style={[styles.list, styles.listText]}>{`${num} ${title}`}</Text>
  );
};

export default AppHymnItem;
