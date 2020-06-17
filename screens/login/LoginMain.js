import React from "react";
import EmailScreen from "./Email";
import PasswordScreen from "./Password";
import LoginScreen from "./Login";
import { ScrollView, Button } from "react-native";


export default class MainLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginIn: true,
      emailIn: false,
      passwordIn: false,
      userEmail: "",
      userPassword: "",
      userName: "",
      user: false,
    };
  }
  onPressLearnMore = () => {
      console.log(this.state)
  }
  render() {
    let torender = (
      <LoginScreen state={this} ShowComponent={this.onLoginClick} />
    );
    if (this.state.emailIn)
      torender = <EmailScreen state={this} showComponent={this.state} />;
    else if (this.state.passwordIn)
      torender = <PasswordScreen state={this} showCompoent={this.state} />;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#17181A" }}>
        {torender}
      </ScrollView>
    );
  }
}
