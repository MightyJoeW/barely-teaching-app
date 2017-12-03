import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./ducks/store/configureStore";
import { startSetReports } from "./ducks/actions/reports";
import { setTextFilter } from "./ducks/actions/filters";
import getVisibleReports from "./ducks/reducers/reports";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById("app")
    );
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(startSetReports()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/tasks");
      }
    });
  } else {
    renderApp();
    history.push("/");
  }
});
