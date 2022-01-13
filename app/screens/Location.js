import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import slider3 from '../assets/images/slider3.png';
import Button from '../components/Button';
import Geocoder from 'react-native-geocoding';
import {request, RESULTS, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Modals from '../components/Modals';

const Location = props => {
  const [pincode, setPincode] = useState('');
  const [modal1, setModal1] = useState(false);

  const location_address = () => {
    Geocoder.init('AIzaSyApMhOefzBErXpSJf0RYeX4DJ3rOJUPdJ4');
    Geocoder.from(19.0642304, 72.9229617).then(
      json => {
        var adresss = json.results[0].formatted_address;
        console.log(adresss);
      },
      error => {
        console.log(error);
      },
    );
  };

  const LocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (response === 'granted') {
        locateLocation();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log(response);
      if (response === 'granted') {
        locateLocation();
      }
    }
  };

  const locateLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        props.navigation.navigate('MainScreen', {
          locatioon: position.coords,
        });
      },
      error => {
        console.log(error, 'error');
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={slider3} style={{height: 370, width: 370}} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Roboto-Bold',
            fontSize: 23,
            textAlign: 'center',
          }}>
          Enter Your Location
        </Text>
      </View>
      <View style={{marginTop: 5, marginHorizontal: 17}}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Roboto-Regular',
            fontSize: 20,
            textAlign: 'center',
          }}>
          We Are Currently serviceable in selected locations.
        </Text>
      </View>
      <View style={{marginTop: 50}}>
        <Button
          text="Use Current Location"
          color="#de1f26"
          onPress={() => {
            LocationPermission();
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          text="Enter Pin Code Manually"
          color="#00b951"
          onPress={() => {
            console.log('in press');
            setModal1(true);
          }}
        />
      </View>
      <View>
        <Modal transparent={true} visible={modal1}>
          <Modals
            onPress={() => {
              setModal1(false);
            }}
            navigation={props.navigation}
            pincode={pincode}
            setPincode={res => setPincode(res)}
          />
        </Modal>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
});
