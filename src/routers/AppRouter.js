import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

//COMPONENTS
import BarelyTeachingApp from "./../components/BarelyTeachingApp";
import Header from "./../components/Header";
import HelpView from "../views/HelpView";
import JournalHeader from "../views/Journal/containers/JournalHeader/JournalHeader";
import JournalView from "../views/Journal/containers/App/JournalView";
import KidFreeView from "../views//Kidfree/containers/App/KidFreeView";
import LoginView from "../views/LoginView/LoginView";
import NotFoundView from "../views/NotFoundView";
import RecordView from "../views/Journal/containers/RecordView/RecordView";
import RecordingsView from "../views/Journal/containers/RecordingsView/RecordingsView";
import ReportsView from "../views/Reports/containers/App/ReportsView";

const subtitle = `The #1 companion for jaded teachers`;

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header subtitle={subtitle} />
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route path="/tasks" component={BarelyTeachingApp} />
        <Route path="/journal" component={JournalView} />
        <Route path="/kidfree" component={KidFreeView} />
        <Route path="/reports" component={ReportsView} />
        <Route path="/help" component={HelpView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
