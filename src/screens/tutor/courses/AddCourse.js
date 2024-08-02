import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

import {TEXT_COLOR, THEME_COLOR, WHITE} from '../../../utils/colors';
import CustomInput from '../../../components/CustomInput';
import {ScrollView, Switch} from 'react-native-gesture-handler';
import BgButton from '../../../components/BgButton';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [isActive, setIsActive] = useState(true);
  return (
    <ScrollView>
      <TouchableOpacity style={styles.addBtn}>
        <Image
          source={require('../../../images/add.png')}
          style={styles.addIcons}
        />
        <Text style={styles.text_addCourse}>Add New Course</Text>
      </TouchableOpacity>
      <CustomInput
        onChangeText={text => {
          setTitle(text);
        }}
        placeholder={'Enter Course Title'}
        value={title}
      />
      <CustomInput
        onChangeText={text => {
          setDescription(text);
        }}
        placeholder={'Enter Price'}
        value={price}
        keyboardType={'numeric'}
      />
      <CustomInput
        onChangeText={text => {
          setDescription(text);
        }}
        multiline={true}
        placeholder={'Enter Description'}
        value={description}
      />
      <View style={styles.activeView}>
        <Text style={styles.textActive}>Course is active:</Text>
        <Switch
          value={isActive}
          onValueChange={value => {
            setIsActive(value);
          }}
        />
      </View>
      <View style={styles.gapButton}>
        <BgButton title={'Upload Course'} color={WHITE} />
      </View>
    </ScrollView>
  );
};
export default AddCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    width: '90%',
    borderWidth: 1,
    height: verticalScale(200),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9e9e9e',
  },
  addIcons: {
    width: scale(20),
    height: scale(20),
  },
  text_addCourse: {
    color: TEXT_COLOR,
    fontWeight: '600',
  },
  activeView: {
    width: '90%',
    marginTop: moderateVerticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textActive: {
    marginLeft: moderateScale(16),
    color: TEXT_COLOR,
  },
  gapButton:{
    marginBottom:moderateScale(100)
  }
});
