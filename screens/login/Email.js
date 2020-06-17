import React from "react";
import PasswordScreen from "./Password";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default class EmailScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  emailClick = () => {
    if (this.userEmail) {
      this.props.state.setState({ passwordIn: true, emailIn: false, userEmail: this.userEmail });
    } else {
      alert("Ingresa un correo");
    }
  };
  cancelClick = () => {
    console.log("Cancel Email");
    this.props.state.setState({
      emailIn: false,
      passwordIn: false,
      loginIn: true,
    });
  };

  render() {
    return (
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 26,
              color: "#FFFFFF",
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            Inicia Sesión
          </Text>
          <Text style={{ fontSize: 19, color: "#B7B7B7", textAlign: "center" }}>
            ¿Cuál es tu correo electrónico?
          </Text>
        </View>
        <View style={styles.btnContainers}>
          <TextInput
            value={this.props.state.userEmail}
            onChangeText={(text) => 
              this.userEmail = text
            }
            style={{
              backgroundColor: "#212224",
              marginBottom: 80,
              width: 264,
              height: 40,
              padding: 10,
              color: "#EEEEEE",
              fontSize: 14,
              borderRadius: 5,
            }}
          />
          <TouchableOpacity style={styles.continuar} onPress={this.emailClick}>
            <Text
              style={{
                color: "#EEEEEE",
                textAlign: "center",
                marginTop: 8,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              SIGUIENTE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login} onPress={this.cancelClick}>
            <Text
              style={{
                color: "#EEEEEE",
                textAlign: "center",
                marginTop: 8,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              CANCELAR
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    padding: 12,
  },

  claroM: {
    width: 147,
    height: 26,
    position: "relative",
    marginTop: 32,
  },
  claroT: {
    position: "relative",
    marginTop: -18,
    marginLeft: 147,
    color: "#EEEEEE",
    fontSize: 16,
    fontWeight: "100",
  },
  header: {
    marginTop: 71,
  },
  btnContainers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 76,
  },
  continuar: {
    backgroundColor: "#981C15",
    width: 264,
    height: 40,
    borderRadius: 6,
  },
  login: {
    backgroundColor: "#1D1E26",
    width: 264,
    height: 40,
    borderRadius: 6,
    marginTop: 16,
  },
});
