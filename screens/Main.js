import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AudienceScreen from "./Audience/AudienceScreen";
import AccountScreen from "./AccountScreen";
import HomeScreen from "./HomeScreen";
import React from 'react';
import MainLogin from './login/LoginMain';
import {useSelector} from 'react-redux'
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MusicScreen from "./Music/MusicScreen";
import ShowPerfil from "./Music/SubComponents/ShowPerfil";

const Stack = createStackNavigator();
const createHomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Music" component={MusicScreen} />
    <Stack.Screen name="ShowPerfil" component={ShowPerfil} />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();


export const Main = () => {

    const {user} = useSelector(state => state.user)

    return (user) ? (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#eeeeee"
            inactiveColor="grey"
            barStyle={{ backgroundColor: "#282828" }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Music"
              component={createHomeStack}
              options={{
                tabBarLabel: "Music",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="music"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Audience"
              component={AudienceScreen}
              options={{
                tabBarLabel: "Audience",
                tabBarIcon: ({ color }) => (
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
                tabBarLabel: "Account",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    ) 
    :
    (<MainLogin></MainLogin>)
}