import React from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import AuthHeader from "../../components/Account/AuthHeader";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <AuthHeader />
      <View style={styles.authContainer}>
        <ScrollView>
          <View>
            <Text style={styles.title}> Reclama un perfil de artista</Text>
          </View>
          <View>
            <Text style={styles.paragraph}>
              {" "}
              Si tienes canciones en Claro música puedes conseguir acceso a tus
              estadísticas, lanzar nuevas pistas a nuestros editores y más.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <Button
                title="Continuar"
                color={Colors.redButton}
                onPress={() => {
                  navigation.navigate("signup");
                }}
              />
            </View>
            <View style={{ paddingTop: 10 }}>
              <Button
                title="Iniciar Sesión"
                color={Colors.greyButton}
                onPress={() => navigation.navigate("login")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    padding: 10,
    fontSize: 25,
    paddingBottom: 20,
    textAlign: "center",
    color: Colors.textsPrimaryColor,
  },
  paragraph: {
    padding: 10,
    fontSize: 18,
    paddingBottom: 20,
    textAlign: "center",
    color: Colors.textSecondaryColor,
  },
  authContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.background ,
    width: "90%",
    maxWidth: 400,
    height: "80%",
    paddingTop: 50,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
