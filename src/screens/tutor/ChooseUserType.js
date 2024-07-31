import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LEARNER_TITLE, SELECT_USER, TUTOR_TITLE} from '../../utils/strings';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {TEXT_COLOR, THEME_COLOR, WHITE} from '../../utils/colors';
import BgButton from '../../components/BgButton';
import BorderButton from '../../components/BorderButton';

const ChooseUserType = () => {
  return (
    <View>
      <View>
        {/* <Image source={require('../image/banner.js')} style={styles.banner}/> */}
      </View>
      <Text style={styles.heading}>{SELECT_USER}</Text>
      <BgButton title={TUTOR_TITLE} color={WHITE} />
      <BorderButton title={LEARNER_TITLE} color={THEME_COLOR} />
    </View>
  );
};

export default ChooseUserType;

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(18),
    color: TEXT_COLOR,
    alignSelf: 'center',
    marginTop: moderateVerticalScale(30),
  },
});
