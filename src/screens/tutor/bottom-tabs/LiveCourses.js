import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BG_COLOR, THEME_COLOR, WHITE } from '../../../utils/colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const LiveCourses = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.addBtn} onPress={()=>{
      navigation.navigate("AddCourse")
     }}>
     
     <Image source={require("../../../images/add.png")} style={styles.addIcons}/>
     <Text style={styles.text_addCourse}>Add New Course</Text>
     </TouchableOpacity>
    </View>
  )
}

export default LiveCourses

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:BG_COLOR,
  },
  addBtn:{

    height: verticalScale(50),
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bottom:moderateScale(20),
    right:moderateScale(20),
    backgroundColor:THEME_COLOR,
    borderRadius:moderateScale(8),
    display:"flex",
    flexDirection:"row",
    paddingLeft:moderateScale(10),
    paddingRight:moderateScale(10)
  },
  addIcons:{
    width: scale(20),
    height: scale(20),
    tintColor:WHITE,

  },
  text_addCourse:{
    color:WHITE,
    fontSize:moderateScale(16),
    fontWeight:"600",
    marginLeft:moderateScale(10)
  }
})