import {StyleSheet, Text, View, keyboardType} from 'react-native';
import React, {useState} from 'react';
import {moderateVerticalScale, verticalScale} from 'react-native-size-matters';
import {THEME_COLOR} from '../utils/colors';
import {TextInput} from 'react-native-gesture-handler';

const CustomInput = ({
  keyboardType,
  onChangeText,
  placeholder,
  value,
  multiline,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={{
        width: '90%',
        height: multiline ? verticalScale(110) : verticalScale(50),
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(15),
        borderRadius: moderateVerticalScale(8),
        borderColor: isFocused ? THEME_COLOR : '#9e9e9e',
      }}>
      <TextInput
        style={styles.inputField}
        value={value}
        multiline={multiline}
        placeholder={placeholder ? placeholder : ''}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={onChangeText}
        onBlur={() => {
          setIsFocused(false);
        }}
        onSubmitEditing={() => {
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
