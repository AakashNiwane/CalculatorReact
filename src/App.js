import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import reducer from "./reducers";
import Screen from "./components/Screen";

function App() {
  return (
    <div className="calc-app">
      <div className="calc-wrapper">
        <Header />
        <Screen />
        <Buttons />
      </div>
    </div>
  );
}

const store = createStore(reducer);

const wrapped = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default wrapped;
