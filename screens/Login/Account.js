import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import UserGuest from "./UserGuest";
import HomeScreen from "../HomeScreen";
import Loading from "../../components/Loading";
import firebaseApp from "../../store/utils/firebase";
import * as firebase from "firebase";
import TabNavigation from "../../components/TabNavigation";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  if (login === null) return <Loading isVisible={true} text="Cargando..." />;
  return login ? <TabNavigation /> : <UserGuest />;
}
