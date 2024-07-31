import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {BG_COLOR, TEXT_COLOR, THEME_COLOR} from '../utils/colors';

const BorderButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
    onPress={onClick}
      style={[styles.btn, {borderColor: bg ? bg : THEME_COLOR}]}>
      <Text style={[styles.title, {color: color ? color : TEXT_COLOR}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BorderButton;

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: verticalScale(50),
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginTop:moderateScale(20),
    borderRadius:moderateScale(20),
    borderWidth:1,
    backgroundColor:BG_COLOR,
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
