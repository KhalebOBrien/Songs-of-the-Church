import {Image, StyleSheet} from 'react-native';
import Size from '../utilities/useResponsiveSize';
import RNFS from 'react-native-fs';
import React, {useEffect, useState} from 'react';

export interface IAppHymnSlide {
  dir: string;
}

const AppHymnSlide = (props: IAppHymnSlide): React.JSX.Element => {
  // const [imagePaths, setImagePaths] = useState<string[]>([]);

  // useEffect(() => {
  //   const loadImagePaths = async () => {
  //     try {
  //       let assetPath = RNFS.DocumentDirectoryPath + '../assets/hymnals/' +  props.dir;
        
  //       const files = await RNFS.readDir(assetPath);
  //       console.log(assetPath);

  //       const imagePaths = files.filter((file) => file.isFile() && file.name.endsWith('.PNG')).map((file) => 'file://' + file.path);

  //       console.log(imagePaths);

  //       setImagePaths(imagePaths);
  //     } catch (error) {
  //       console.error('Error loading slides:', error);
  //     }
  //   };

  //   loadImagePaths();
  // }, []);

  const imagePaths = [
    '../assets/hymnals/'+props.dir+'/Slide1.PNG',
    // require('../assets/hymnals/'+props.dir+'/Slide2.PNG'),
    // require('../assets/hymnals/'+props.dir+'/Slide3.PNG'),
    // Add more image paths as needed
  ];
  return (
    <>
      {imagePaths.map((imagePath, index) => (
        <Image key={index} source={{uri: imagePath}} style={styles.size} />
      ))}
    </>
  );
};

export default AppHymnSlide;

const styles = StyleSheet.create({
  size: {width: Size.calcWidth(100), height: Size.calcHeight(100)},
});
