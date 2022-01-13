import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    text: 'Enter Your pincode',
    Desc: 'Enter Your Pincode to check the availability in your location',
    image: require('../assets/images/slider3.png'),
  },
  {
    key: 2,
    text: 'Make Your Purchase',
    Desc: 'Choose the products of your choice and place the order',
    image: require('../assets/images/slider1.png'),
  },
  {
    key: 3,
    text: 'CheersByUnited',
    Desc: 'We Deliver the products right at your doorstep',
    image: require('../assets/images/slider2.png'),
  },
];

const Slider = props => {
  const renderitem = ({item}) => (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={item.image} style={{height: 350, width: 350}} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            color: '#000',
            fontSize: 20,
            textAlign: 'center',
          }}>
          {item.text}
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
          }}>
          {item.Desc}
        </Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={{flex: 0.7}}>
        <AppIntroSlider
          renderItem={renderitem}
          data={slides}
          showNextButton={false}
          showDoneButton={false}
          activeDotStyle={{backgroundColor: '#808080'}}
          dotStyle={{backgroundColor: '#D3D3D3'}}
        />
      </View>
      <View style={styles.secondcontainer}>
        <View style={{marginTop: 30}}>
          <Button
            text="Get Started"
            color="#00b951"
            onPress={() => {
              props.navigation.navigate('ConfirmAge');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  secondcontainer: {
    flex: 0.3,
    backgroundColor: '#FFF',
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
  },
});
