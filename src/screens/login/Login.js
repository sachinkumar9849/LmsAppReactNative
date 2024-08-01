import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {BUTTON_COLOR, TEXT_COLOR, WHITE} from '../../utils/colors';
import {useNavigation, useRoute} from '@react-navigation/native';

const Login = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View>
      <Image source={require('../../images/login.jpg')} style={styles.banner} />
      <Text style={styles.tagline}>Welcome User,</Text>
      <TouchableOpacity
        style={styles.login_btn}
        onPress={() => {
          if (route.params.screen == 'tutor') {
            navigation.navigate('TutorHome');
          }
        }}>
        <Text style={styles.loginText}>Login with google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: moderateScale(300),
  },
  login_btn: {
    width: '90%',
    height: verticalScale(50),
    backgroundColor: WHITE,
    borderRadius: moderateScale(5),
    elevation: 5,
    marginTop: moderateScale(20),
    display: 'flex',

    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    justifyContent: 'center',
  },
  loginText: {
    color: BUTTON_COLOR,
    textAlign: 'center',
  },
  tagline: {
    color: TEXT_COLOR,
    fontWeight: '600',
    fontSize: moderateScale(22),
    marginTop: moderateScale(12),
    marginLeft: moderateScale(11),
  },
});
