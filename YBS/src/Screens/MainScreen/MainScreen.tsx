import React from 'react';
import {Button, View} from 'react-native';

import {StackScreenProps, StackParamList} from '../../Navigation';

import styles from './MainScreen.Styles';
import ImageCarousal from '../../Components/ImageCarousal';

const MainScreen = ({navigation}: StackScreenProps<'Main'>): JSX.Element => {
  return <ImageCarousal />;
};

export default MainScreen;
