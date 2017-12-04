import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../ducks/actions/auth";

export const Header = ({ startLogout }) => (
  <div className="header">
    <div className="container">
      <div className="header-container">
        <h1 className="header__title"> Barely Teaching </h1>
        <button className="logout-button" onClick={startLogout}>
          Logout
        </button>
      </div>

      <h2 className="header__subtitle">The #1 companion for jaded teachers</h2>
      <div className="header__content">
        <NavLink
          className="header__nav"
          to="/tasks"
          activeClassName="is-active"
        >
          Tasks
        </NavLink>
        <NavLink
          className="header__nav"
          to="/journal"
          activeClassName="is-active"
        >
          Journal
        </NavLink>
        {/* <NavLink
          className="header__nav"
          to="/kidfree"
          activeClassName="is-active"
        >
          Kid-Free
        </NavLink> */}
        <NavLink
          className="header__nav"
          to="/reports"
          activeClassName="is-active"
        >
          Reports
        </NavLink>
        <NavLink className="header__nav" to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
