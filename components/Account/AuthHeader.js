import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function AuthHeader() {
  return (
    // <View>
    <Image
      source={require("../../assets/logo-claromusica.png")}
      style={styles.logoImg}
    ></Image>
    //   <Text>Para Artistas</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  logoImg: {
    //flex: 1,
    alignItems: "flex-start",
    width: "80%",
    height: 50,
  },
});
