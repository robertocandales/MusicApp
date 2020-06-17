import React from "react";


import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";



export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
  }

  loginClick = () => {
    // ejecutar funcion de props
    this.props.state.setState({loginIn: false, emailIn: true});
  };

  backClick = () => {
    this.props.state.setState({loginIn: true, emailIn: false});
  }
  render() {
      return (
        <ScrollView style={styles.main}>
          <Image
            style={styles.claroM}
            source={require("../../assets/cm-logo.png")}
          />
          <Text style={styles.claroT}> Para Artistas</Text>

          <View style={styles.header}>
            <Text
              style={{
                color: "#eeeeee",
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Reclama un perfil de artista
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text
              style={{
                color: "#eeeeee",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Si tienes canciones en Claro música, puedes conseguir acceso a tus
              estadísticas, lanzar nuevas pistas a nuestros editores y más
            </Text>
          </View>
          <View style={styles.btnContainers}>
            <TouchableOpacity style={styles.continuar} onPress={this.backClick}>
              <Text
                style={{
                  color: "#EEEEEE",
                  textAlign: "center",
                  marginTop: 8,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                CONTINUAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={this.loginClick}>
              <Text
                style={{
                  color: "#EEEEEE",
                  textAlign: "center",
                  marginTop: 8,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                INICIAR SESIÓN
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 20,
  },

  claroM: {
    width: 147,
    height: 26,
    position: "relative",
    marginTop: 32,
    marginLeft: 16
  },
  claroT: {
    position: "relative",
    marginTop: -18,
    marginLeft: 163,
    color: "#EEEEEE",
    fontSize: 16,
    fontWeight: "100",
  },
  header: {
    marginTop: 61,
    marginHorizontal: 93,
  },
  paragraph: {
    marginTop: 32,
    marginHorizontal: 60,
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
