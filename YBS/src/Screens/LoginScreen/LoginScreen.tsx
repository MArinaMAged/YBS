import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../Navigation';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './LoginScreen.Styles';

interface Props extends StackScreenProps<StackParamList, 'Login'> {}

const LoginScreen: React.FC<Props> = ({navigation}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePress = () => {
    console.log(`Phone number: ${phoneNumber}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>تسجيل الدخول </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ادخل رقم الهاتف</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="01234567890"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
