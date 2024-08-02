import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import {TEXT_COLOR, WHITE} from '../../utils/colors';

const CourseItem = ({data, item, index}) => {
  return (
    <View
      style={{
        width: '90%',

        alignSelf: 'center',
        marginTop: moderateScale(20),
        elevation: 5,
        backgroundColor: WHITE,
        borderRadius: moderateScale(8),
        marginBottom:
          data.length - 1 == index
            ? moderateVerticalScale(100)
            : moderateVerticalScale(5),
      }}>
      <Image
        source={require('../../images/course-ph.png')}
        style={{width: '100%', height: moderateVerticalScale(200)}}
      />
      <View style={styles.descriptionWrap}>
        <Text style={styles.courseItemTitle}>React native component</Text>
        <Text style={styles.courseItemDes}>
          React native component React native componentReact native component
        </Text>
      </View>
    </View>
  );
};

export default CourseItem;

const styles = StyleSheet.create({
  courseItemTitle: {
    color: TEXT_COLOR,
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  descriptionWrap: {
    padding: moderateScale(10),
  },
  courseItemDes: {
    fontSize: moderateScale(14),
    color: TEXT_COLOR,
    opacity: 0.6,
  },
});
