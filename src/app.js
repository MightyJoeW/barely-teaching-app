import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

//COMPONENTS
import BarelyTeachingApp from "./components/BarelyTeachingApp";
import Header from "./components/Header";

//ROUTES
const LandingPage = () => <div>this is from my landing page component</div>;

const JournalPage = () => <div>this is my journal component</div>;

const KidFreePage = () => <div>this is my kid free component</div>;

const HelpPage = () => <div>this is my help component</div>;

const NotFoundPage = () => (
  <div>
    404 - Page Not Found...this feels bad. <Link to="/">Go Home</Link>
  </div>
);

const subtitle = `The #1 companion for jaded teachers`;

const routes = (
  <BrowserRouter>
    <div>
      <Header subtitle={subtitle} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={BarelyTeachingApp} />
        <Route path="/journal" component={JournalPage} />
        <Route path="/kidfree" component={KidFreePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
