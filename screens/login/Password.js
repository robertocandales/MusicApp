import React from "react";
import {login} from '../../store/redux/actions/user.action';
import { connect } from 'react-redux';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";

class PasswordScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }
  signInClick = async (e) => {
    // auth.firebase.signInWithUserAndPassword()
    if (this.password ) {
      let isLogged = false;
      try {
       isLogged = await this.props.login('John Mayer', this.password);
      } catch(e) {
        alert("Credenciales incorrectas");
      }

      if (isLogged) {
        this.props.state.setState({ userPassword: this.password });
        this.props.state.setState({ user: true });
      
        this.props.state.setState({
          passwordIn: false,
          emailIn: false,
          loginIn: false,
          user: true,
        });
      }
    } else {
      alert("Ingresa tu contraseña");
    }
  };
  cancelClick = () => {
    console.log("Cancel Email");
    this.props.state.setState({
      emailIn: true,
      passwordIn: false,
      loginIn: false,
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
            Contraseña
          </Text>
        </View>
        <View style={styles.btnContainers}>
          <TextInput
            onChangeText={(text) => {
              (this.password = text), console.log(this.password);
            }}
            secureTextEntry={true}
            style={styles.inputPassword}
          />
          <View style={styles.rememberPassword}></View>
          <TouchableOpacity style={styles.continuar} onPress={this.signInClick}>
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

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { login  })(PasswordScreen);


const styles = StyleSheet.create({
  main: {
    padding: 12,
  },
  checkbox: {
    borderColor: "white",
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
  inputPassword: {
    backgroundColor: "#212224",
    marginBottom: 16,
    width: 264,
    height: 40,
    padding: 10,
    color: "#EEEEEE",
    fontSize: 14,
    borderRadius: 5,
  },
  rememberPassword: {
    flexDirection: "row",
    marginBottom: 42,
    marginLeft: -100,
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
