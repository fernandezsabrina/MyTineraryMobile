import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Inital from './screens/Initial'
import Homepage from './screens/Homepage'
import Cities from './screens/Cities'
import City from './screens/City'
import Initial from './screens/Initial';
import LogIn from './screens/LogIn'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Cities></Cities>
  );
}

export default App
