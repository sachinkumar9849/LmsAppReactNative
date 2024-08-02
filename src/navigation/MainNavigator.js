import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
// import Splash from '../screens/tutor/Splash';

import Login from '../screens/login/Login';
import ChooseUserType from '../screens/ChooseUserType';
import Splash from '../screens/Splash';
import TutorHome from '../screens/tutor/TutorHome';
import AddCourse from '../screens/tutor/courses/AddCourse';


const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="ChooseUserType" component={ChooseUserType} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="TutorHome" component={TutorHome} options={{ headerShown: false }} />
        <Stack.Screen name="AddCourse" component={AddCourse} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
