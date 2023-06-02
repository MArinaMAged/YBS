import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/Colors';

const Button = ({type, title, onPress, customStyle}) => {
  const getPropStyle = type => {
    switch (type) {
      case 'primary':
        return {btn: styles.primaryButtonStyle, txt: styles.primaryTextStyles};

      case 'secondary':
        return {btn: styles.secButtonStyle, txt: styles.secTextStyles};

      default:
        return {};
    }
  };
  return (
    <TouchableHighlight
      underlayColor={''}
      style={[styles.commonButtonStyle, getPropStyle(type).btn, customStyle]}
      onPress={onPress}>
      <Text style={[styles.commonTextStyle, getPropStyle(type).txt]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  commonButtonStyle: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
  },
  commonTextStyle: {
    // fontWeight: '500',
    fontFamily: 'Tajawal',
    lineHeight: 26.4,
    fontSize: 22,
  },
  primaryButtonStyle: {
    backgroundColor: colors.PRIMARY,
  },
  secButtonStyle: {
    backgroundColor: colors.SECONDARY,
    borderWidth: 2,
    borderColor: colors.PRIMARY,
  },
  primaryTextStyles: {color: colors.SECONDARY},
  secTextStyles: {color: colors.PRIMARY},
});
