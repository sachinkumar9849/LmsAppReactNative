import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LiveCourses from './bottom-tabs/LiveCourses';
import CourseSell from './bottom-tabs/CourseSell';
import TutorProfile from './bottom-tabs/TutorProfile';
import {TEXT_COLOR, THEME_COLOR} from '../../utils/colors';

const Bottom = createBottomTabNavigator();

const TutorHome = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle: {height: 60}}}>
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, focused}) => {
            return (
              <Image
                source={require('../../images/course.jpg')}
                style={{
                  tintColor: focused ? THEME_COLOR : 'black',
                  width: size,
                  height: size,
                }}
              />
            );
          },
          tabBarLabel: ({focused, size}) => {
            return (
              <Text
                style={{
                  color: focused ? THEME_COLOR : TEXT_COLOR,
                  fontSize: size,
                }}>
                {'Courses'}
              </Text>
            );
          },
        }}
        name="LiveCourses"
        component={LiveCourses}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, focused}) => {
            return (
              <Image
                source={require('../../images/course.jpg')}
                style={{
                  tintColor: focused ? THEME_COLOR : 'black',
                  width: size,
                  height: size,
                }}
              />
            );
          },
          tabBarLabel: ({focused, size}) => {
            return (
              <Text
                style={{
                  color: focused ? THEME_COLOR : TEXT_COLOR,
                  fontSize: size,
                }}>
                {'History'}
              </Text>
            );
          },
        }}
        name="CourseSell"
        component={CourseSell}
      />

      <Bottom.Screen
        options={{
          tabBarIcon: ({size, focused}) => {
            return (
              <Image
                source={require('../../images/course.jpg')}
                style={{
                  tintColor: focused ? THEME_COLOR : 'black',
                  width: size,
                  height: size,
                }}
              />
            );
          },
          tabBarLabel: ({focused, size}) => {
            return (
              <Text
                style={{
                  color: focused ? THEME_COLOR : TEXT_COLOR,
                  fontSize: size,
                }}>
                {'Profile'}
              </Text>
            );
          },
        }}
        name="Profile"
        component={TutorProfile}
      />
    </Bottom.Navigator>
  );
};

export default TutorHome;

const styles = StyleSheet.create({});
