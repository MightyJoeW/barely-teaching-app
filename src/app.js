import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./ducks/store/configureStore";
// import configureStoreR from "./views/Reports/store/configureStoreR";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addReport } from "./ducks/actions/reports";
import { setTextFilter } from "./ducks/actions/filters";
import getVisibleReports from "./ducks/reducers/reports";

// const store = configureStoreR();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
