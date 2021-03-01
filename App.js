import 'react-native-gesture-handler';
import React from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Homepage from './screens/Homepage'
import Cities from './screens/Cities'
import City from './screens/City'
import Initial from './screens/Initial';
import LogIn from './screens/LogIn'
import Register from './screens/Register'
import mainReducer from './Redux/Reducers/mainReducer'

const myStore = createStore(mainReducer, applyMiddleware(thunk))

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Initial" component={Initial} />
          <Drawer.Screen name="Log In" component={LogIn} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Homepage" component={Homepage} />
          <Drawer.Screen name="Cities" component={Cities} />
          <Drawer.Screen name="City" component={City} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App
