import React from 'react';
import  WelcomeScreen from './screens/WelcomeScreen';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { PrimaryColor } from './constants/PrimaryColor';
import Login from './screens/Login';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import {auth} from './firebase'
import { WelcomeScreenData } from './Data/WelcomeScreenData';
import DonateForm from './screens/DonateForm';
import BloodInfo from './screens/BloodInfo';
import { Button } from 'react-native';



const Stack = createStackNavigator();

const globalScreenOptions ={
  headerStyle: { backgroundColor: PrimaryColor},
  headerTitleStyle: {color:'white', fontWeight: 'bold', alignSelf:'center', fontSize:17},
  headerTintColor: 'white'
  
  // headerTintColor: {color:'white'},
}

export default function App({navigation}) {

  return (
    <NavigationContainer >
       <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName={auth.currentUser ? (HomeScreen) : (WelcomeScreenData)} >
      <Stack.Screen options={{headerShown: true}} name="Donor" component={WelcomeScreen}  />
      <Stack.Screen options={{headerShown: true}} name="Login" component={Login}  />
      <Stack.Screen options={{headerShown: true}} name="Register" component={RegisterScreen}  />
      <Stack.Screen options={{headerShown: true}} name="Home" component={HomeScreen}/>
      <Stack.Screen options={{headerShown: true}} name="Donate" component={DonateForm}/>
      <Stack.Screen options={{headerShown: true}} name="Blood Details" component={BloodInfo}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

