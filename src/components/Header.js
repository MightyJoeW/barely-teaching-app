import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../ducks/actions/auth";

export const Header = ({ startLogout }) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title"> Barely Teaching </h1>

      <h2 className="header__subtitle">The #1 companion for jaded teachers</h2>

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
      <button onClick={startLogout}> Logout </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
