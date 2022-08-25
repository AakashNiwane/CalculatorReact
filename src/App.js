import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import reducer from "./reducers";

function App() {
  return (
    <div className="calc-app">
      <div className="calc-wrapper">
        <Header />
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
