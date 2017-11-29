import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./views/Journal/core/store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
