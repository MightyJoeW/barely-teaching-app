import React from "react";
import { Router, Route, Switch, Link, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

//COMPONENTS
import BarelyTeachingApp from "../components/BarelyTeachingApp";
import HelpView from "../views/HelpView";
import JournalView from "../views/Journal/containers/App/JournalView";
import KidFreeView from "../views//Kidfree/containers/App/KidFreeView";
import LoginView from "../views/LoginView/LoginView";
import NotFoundView from "../views/NotFoundView";
import ReportsView from "../views/Reports/containers/App/ReportsView";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginView} exact={true} />
        <PrivateRoute path="/tasks" component={BarelyTeachingApp} />
        <PrivateRoute path="/journal" component={JournalView} />
        <PrivateRoute path="/kidfree" component={KidFreeView} />
        <PrivateRoute path="/reports" component={ReportsView} />
        <PrivateRoute path="/help" component={HelpView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
