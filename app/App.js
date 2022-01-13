import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Slider from './screens/Slider';
import ConfirmAge from './screens/ConfirmAge';
import Location from './screens/Location';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="ConfirmAge" component={ConfirmAge} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
