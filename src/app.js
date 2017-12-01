import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./ducks/store/configureStore";

import { addReport } from "./ducks/actions/reports";
import { setTextFilter } from "./ducks/actions/filters";
import getVisibleReports from "./ducks/reducers/reports";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
