import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import Cheersbyunited from '../assets/images/cheersbyunited.png';

const ConfirmAge = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={Cheersbyunited} style={{width: 330, height: 330}} />
      </View>
      <View style={styles.sectioncontainer}>
        <Text style={styles.sectiontext}>PLEASE</Text>
        <Text style={styles.sectiontext}>CONFIRM YOUR AGE</Text>
        <View style={styles.triangle}></View>
      </View>
      <View style={styles.textcontainer}>
        <Text
          style={[
            styles.text,
            {color: '#808080', fontSize: 15, textAlign: 'center'},
          ]}>
          Want to get your Favourite drinks delivered at your doorstep? All you
          have to do is tell us when were you born.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.navigation.navigate('Location');
        }}>
        <View style={styles.buttoncontainer}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              color: '#FFF',
              textAlign: 'center',
              fontSize: 16,
            }}>
            I AM ABOVE THE AGE OF 21
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text
          style={{color: '#de1f26', fontFamily: 'Roboto-Bold', fontSize: 19}}>
          EXIT
        </Text>
      </View>
      <View style={[styles.textcontainer, {marginTop: 15}]}>
        <Text
          style={[
            styles.text,
            {color: '#808080', fontSize: 15, textAlign: 'center'},
          ]}>
          By entering this Application , you hereby agree by the
          <Text style={styles.underline}>Terms Service</Text> and {''}
          <Text style={styles.underline}>Privacy Policy</Text> of
          CheersByUnited.
        </Text>
      </View>
    </View>
  );
};

export default ConfirmAge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
  imagecontainer: {
    alignItems: 'center',
  },
  sectioncontainer: {
    width: '80%',
    backgroundColor: '#de1f26',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: '-15%',
  },
  sectiontext: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
  triangle: {
    width: 40,
    height: 40,
    backgroundColor: '#de1f26',
    alignSelf: 'center',
    position: 'absolute',
    transform: [{rotate: '45deg'}],
    top: 50,
    zIndex: -1,
  },
  textcontainer: {
    marginTop: 25,
    marginHorizontal: 30,
  },
  buttoncontainer: {
    width: '85%',
    height: 40,
    backgroundColor: '#de1f26',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  underline: {
    textDecorationLine: 'underline',
    color: 'orange',
  },
});
