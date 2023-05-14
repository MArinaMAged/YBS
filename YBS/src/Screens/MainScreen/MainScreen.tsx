import React from 'react';
import {Button, View} from 'react-native';

import {StackScreenProps} from '../../Navigation';

import styles from './MainScreen.Styles';

const MainScreen = ({navigation}: StackScreenProps<'Main'>): JSX.Element => {
  return (
    <View style={styles.ContainerStyle}>
      <Button title="GO TO SEC SC" onPress={() => navigation.push('Login')} />
    </View>
  );
};

export default MainScreen;
