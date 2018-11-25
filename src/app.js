// EXTERNAL DEPENDENCIES
import "react-dates/initialize";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import "react-dates/lib/css/_datepicker.css";
import "normalize.css/normalize.css";

// INTERNAL DEPENDENCIES
import "./styles/styles.scss";
import LoadingPage from "./components/loading-page";
import configureStore from "./redux/store/configureStore";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./redux/actions/auth";
import { startSetReports } from "./redux/actions/reports";

// COMPONENT DEFINITION
const store = configureStore();
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetReports()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/tasks");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
