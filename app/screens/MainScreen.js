import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../assets/images/logo.png';

const MainScreen = props => {
  const {pincode, locatioon} = props.route.params || {};
  console.log(locatioon, 'mainscreen');
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={{width: 150, height: 250}} />
      </View>
      <View>
        <Text style={styles.text}>Welcome</Text>
      </View>
      {pincode && (
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.text1}>
            Your Manually Entered Pincode : {''}
            <Text style={{fontWeight: 'bold'}}>{pincode}</Text>
          </Text>
          <Text style={styles.text1}>Yayy ! We are Availabe Here</Text>
        </View>
      )}
      {locatioon && (
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.text1}>Your Coordinates are :</Text>
          <Text style={styles.text1}>
            <Text style={{fontWeight: 'bold'}}>Latitude : </Text>
            {locatioon.latitude}
          </Text>
          <Text style={styles.text1}>
            <Text style={{fontWeight: 'bold'}}>Longitude : </Text>
            {locatioon.longitude}
          </Text>
          <Text style={styles.text1}>
            The Google Api which convert longitude and latitude is Paided :(
          </Text>
        </View>
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  text1: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});
