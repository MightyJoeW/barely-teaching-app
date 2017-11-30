import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./views/Journal/core/store/configureStore";
import configureStoreR from "./views/Reports/store/configureStoreR";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addReport } from "./views/Reports/actions/reports";
import { setTextFilter } from "./views/Reports/actions/filters";
import getVisibleReports from "./views/Reports/selectors/reports";

const storeR = configureStoreR();

storeR.dispatch(addReport({ student_name: "Jerry Smith" }));
storeR.dispatch(addReport({ student_name: "Stan Smith" }));
storeR.dispatch(setTextFilter("jerry"));

const state = storeR.getState();
const visibleReports = getVisibleReports(state.reports, state.filters);
console.log(visibleReports);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
