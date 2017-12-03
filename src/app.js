import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
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

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetReports()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("app")
  );
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
  } else {
    console.log("log out");
  }
});
