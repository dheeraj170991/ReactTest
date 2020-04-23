import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import Cat from './CustomWithClass.js';
import CatFunc from './CustomComponant.js';

const Stack = createStackNavigator();
export default function App(){
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="HOME">
  <Stack.Screen name="HOME"  component={Cat} options={{title: 'OverView'}}/>
  <Stack.Screen name="Detail" component={CatFunc} />
  </Stack.Navigator>  
  </NavigationContainer>
  );
}           