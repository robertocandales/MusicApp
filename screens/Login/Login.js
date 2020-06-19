import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";
import Colors from "../../constants/Colors";
import AuthHeader from "../../components/Account/AuthHeader";
// import LoginFacebook from "../../components/Account/LoginFacebook";

export default function Login() {
  const toastRef = useRef();

  return (
    <ScrollView style={styles.screen}>
      <Image
        // source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      {/* <View style={styles.viewContainer}>
        <LoginFacebook toastRef={toastRef} />
    </View> */}
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();

  return (
    <Text style={styles.textRegister}>
      ¿No haz reclamado perfil?{" "}
      <Text style={styles.btnRegister} onPress={() => {}}>
        Reclamar
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    color: Colors.textsPrimaryColor,
  },
  btnRegister: {
    color: Colors.textsPrimaryColor,
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: Colors.greyButton,
    margin: 40,
  },
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
