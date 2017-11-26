import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

//COMPONENTS
import BarelyTeachingApp from "./components/BarelyTeachingApp";

//ROUTES
const LandingPage = () => <div>this is from my landing page component</div>;

const Journal = () => <div>this is my journal component</div>;

const KidFree = () => <div>this is my kid free component</div>;

const Help = () => <div>this is my help component</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/tasks" component={BarelyTeachingApp} />
      <Route path="/journal" component={Journal} />
      <Route path="/kidfree" component={KidFree} />
      <Route path="/help" component={Help} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
