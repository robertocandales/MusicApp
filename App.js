/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import MusicScreen from './screens/Music/MusicScreen';
import AudienceScreen from './screens/Audience/AudienceScreen';
import AccountScreen from './screens/AccountScreen';
import ShowPerfil from './screens/Music/SubComponents/ShowPerfil';
import {createStackNavigator} from '@react-navigation/stack';

import store from './store';

const Stack = createStackNavigator();
const createHomeStack = () => (
  <Stack.Navigator
    initialRouteName="MusicScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Music" component={MusicScreen} />
    <Stack.Screen name="ShowPerfil" component={ShowPerfil} />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Tab.Navigator
                  initialRouteName="Home"
                  activeColor="#eeeeee"
                  inactiveColor="grey"
                  barStyle={{backgroundColor: '#282828'}}>
                  <Tab.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{
                          tabBarLabel: 'Home',
                          tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons name="home" color={color} size={26} />
                          ),
                      }}
                  />
                  <Tab.Screen
                      name="Music"
                      component={createHomeStack}
                      options={{
                          tabBarLabel: 'Music',
                          tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons name="music" color={color} size={26} />
                          ),
                      }}
                  />
                  <Tab.Screen
                      name="Audience"
                      component={AudienceScreen}
                      options={{
                          tabBarLabel: 'Audience',
                          tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons
                                  name="account-supervisor"
                                  color={color}
                                  size={26}
                              />
                          ),
                      }}
                  />
                  <Tab.Screen
                      name="Account"
                      component={AccountScreen}
                      options={{
                          tabBarLabel: 'Account',
                          tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons name="account" color={color} size={26} />
                          ),
                      }}
                  />
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>
  );
};

export default App;
