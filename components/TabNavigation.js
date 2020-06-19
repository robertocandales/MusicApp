import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import MusicScreen from "../screens/Music/MusicScreen";
import AudienceScreen from "../screens/Audience/AudienceScreen";
import AccountScreen from "../screens/AccountScreen";
import ShowPerfil from "../screens/Music/SubComponents/ShowPerfil";

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();
const createHomeStack = () => (
  <Stack.Navigator
    initialRouteName="MusicScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Music" component={MusicScreen} />
    <Stack.Screen name="ShowPerfil" component={ShowPerfil} />
  </Stack.Navigator>
);
const TabNavigation = (props) => {
  console.log("Artist to Show", props);
  return (
    <Tab.Navigator
      independent={true}
      // initialRouteName='Home'
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
            <MaterialCommunityIcons name="music" color={color} size={26} />
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
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
