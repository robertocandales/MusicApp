/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import MusicScreen from './screens/Music/MusicScreen';
import AudienceScreen from './screens/AudienceScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
  return (
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
          component={MusicScreen}
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
  );
};

export default App;
