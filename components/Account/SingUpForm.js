import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import Loading from "../Loading";

import { firebaseApp } from "../../store/utils/firebase";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default function SignUpForm(props) {
  const { toastRef, setIsLoading, navigation } = props;
  const [ArtistName, setArtistName] = useState("");
  const [UserEmail, setEmail] = useState("");
  const [UserPassword, setPassword] = useState("");

  const ReclaimProfile = () => {
    if (!ArtistName || !UserEmail || !UserPassword) {
      toastRef.current.show("Todos los campos del formulario son obligatorios");
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(UserEmail, UserPassword)
        .then((cred) => {
          return db.collection("users").doc(cred.user.uid).set({
            ArtistName: ArtistName,
            UserEmail: UserEmail,
            UserPassword: UserPassword,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
        .then(() => {
          setIsLoading(false);
          navigation.navigate("tabNavigator");
        })
        .catch(() => {
          setIsLoading(false);
          toastRef.current.show(
            "Error al reclamar perfil, intentelo más tarde"
          );
        });
    }
  };

  return (
    <View style={styles.scrollView}>
      <FormAdd
        setArtistName={setArtistName}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <Button
        title="Reclamar Perfil"
        onPress={ReclaimProfile}
        buttonStyle={styles.btnReclaimProfile}
      />
    </View>
  );
}

function FormAdd(props) {
  const { setArtistName, setEmail, setPassword } = props;

  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre del Artista"
        containerStyle={styles.input}
        onChange={(e) => setArtistName(e.nativeEvent.text)}
      />
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  btnReclaimProfile: {
    backgroundColor: "#00a680",
    margin: 20,
  },
  viewImages: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20,
  },
  mapStyle: {
    width: "100%",
    height: 550,
  },
  viewMapBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  viewMapBtnContainerCancel: {
    paddingLeft: 5,
  },
  viewMapBtnCancel: {
    backgroundColor: "#a60d0d",
  },
  viewMapBtnContainerSave: {
    paddingRight: 5,
  },
  viewMapBtnSave: {
    backgroundColor: "#00a680",
  },
});
