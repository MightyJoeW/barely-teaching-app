import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title"> {props.title} </h1>
      {props.subtitle && (
        <h2 className="header__subtitle"> {props.subtitle} </h2>
      )}
      <NavLink to="/tasks" activeClassName="is-active" exact={true}>
        Tasks
      </NavLink>
      <NavLink to="/journal" activeClassName="is-active">
        Journal
      </NavLink>
      <NavLink to="/kidfree" activeClassName="is-active">
        Kid-Free
      </NavLink>
      <NavLink to="/reports" activeClassName="is-active">
        Reports
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </div>
);

Header.defaultProps = {
  title: "Barely Teaching"
};

export default Header;
