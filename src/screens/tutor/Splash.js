import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {BG_COLOR, THEME_COLOR} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChooseUserType');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME_COLOR} />
      <Text
        style={{
          fontSize: 44,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Logo
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: THEME_COLOR,
  },
});
