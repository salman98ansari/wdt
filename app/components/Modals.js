import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const widths = width;
import Button from './Button';
import cross2 from '../assets/images/cross2.png';
import map from '../assets/images/map.jpg';

const Modals = ({onPress, navigation, pincode, setPincode}) => {
  const onSubmit = () => {
    if (pincode !== '') {
      onPress();
      navigation.navigate('MainScreen', {
        pincode: pincode,
      });
      setPincode('');
    }
  };
  return (
    <View style={styles.modal1}>
      <View style={styles.modalcontainer}>
        <View style={styles.modalarea1}>
          <View style={styles.crosscontainer}>
            <TouchableOpacity
              onPress={() => {
                onPress();
              }}>
              <Image source={cross2} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
          <View style={styles.imagecontainer}>
            <Image source={map} style={{height: 100, width: 100}} />
          </View>
          <View style={styles.textinputcontainer}>
            <TextInput
              placeholder="Pincode"
              placeholderTextColor={'#808080'}
              style={styles.textinput}
              keyboardType="numeric"
              value={pincode}
              onChangeText={val => {
                setPincode(val);
              }}
            />
          </View>
          <Button
            text="SUBMIT"
            color="#00b951"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  modal1: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
  },
  modalcontainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 20,
    // paddingBottom: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalarea1: {
    width: widths / 1,
    height: height / 2.4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 4,
  },
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  crosscontainer: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  textinputcontainer: {
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  textinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: '100%',
    height: 45,
    color: '#000',
    paddingHorizontal: 15,
  },
});
