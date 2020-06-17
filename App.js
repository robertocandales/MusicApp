/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import store from "./store";
import { Main } from "./screens/Main";


const App: () => React$Node = () => {
  
    return (
      <Provider store={store}> 
        <Main></Main>
      </Provider>
    );


};

export default App;
