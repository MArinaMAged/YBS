import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '../../Navigation';
import styles from './SecondScreen.Styles';
import ImageCarousal from '../../Components/ImageCarousal';
const SecondScreen = ({
  navigation,
}: StackScreenProps<'Second'>): JSX.Element => {
  return <ImageCarousal />;
};

export default SecondScreen;
