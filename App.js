import 'react-native-gesture-handler';
import React from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Homepage from './screens/Homepage'
import Cities from './screens/Cities'
import City from './screens/City'
import Initial from './screens/Initial';
import LogIn from './screens/LogIn'
import Register from './screens/Register'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Initial}/>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Log In" component={LogIn}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Cities" component={Cities}/>
        <Stack.Screen name="City" component={City}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
