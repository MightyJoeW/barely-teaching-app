import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

//COMPONENTS
import BarelyTeachingApp from "./components/BarelyTeachingApp";

//ROUTES
const LandingPage = () => <div>this is from my landing page component</div>;

const JournalPage = () => <div>this is my journal component</div>;

const KidFreePage = () => <div>this is my kid free component</div>;

const HelpPage = () => <div>this is my help component</div>;

const NotFoundPage = () => <div>404! Page Not Found...this feels bad.</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/tasks" component={BarelyTeachingApp} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/kidfree" component={KidFreePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
