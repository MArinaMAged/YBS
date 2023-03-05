import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '../../Navigation';
import styles from './SecondScreen.Styles';
const SecondScreen = ({
  navigation,
}: StackScreenProps<'Second'>): JSX.Element => {
  return (
    <View style={styles.ContainerStyle}>
      <Text>ALLLOo SECOND SCREEN</Text>
    </View>
  );
};

export default SecondScreen;
