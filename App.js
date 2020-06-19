/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MusicScreen from "./screens/Music/MusicScreen";
import Account from "./screens/Login/Account";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";

import ShowPerfil from "./screens/Music/SubComponents/ShowPerfil";
import { createStackNavigator } from "@react-navigation/stack";

import store from "./store";
import TabNavigation from "./components/TabNavigation";

import { decode, encode } from "base-64";

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

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

const tabNavigation = () => <TabNavigation />;

const createLoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="account"
      component={Account}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="login"
      component={Login}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="signup"
      component={SignUp}
    />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="account"
            options={{ headerShown: false }}
            component={createLoginStack}
          />
          <Stack.Screen
            name="tabNavigator"
            options={{ headerShown: false }}
            component={tabNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
