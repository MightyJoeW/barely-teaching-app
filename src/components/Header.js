// EXTERNAL DEPENDENCIES
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// INTERNAL DEPENDENCIES
import { startLogout } from "../redux/actions/auth";

// COMPONENT DEFINITION
const Header = ({ startLogout, subTitle }) => (
  <div className="header">
    <div className="container">
      <div className="header-container">
        <h1 className="header__title"> Barely Teaching </h1>
        <button className="logout-button" onClick={startLogout}>
          Logout
        </button>
      </div>

      <h2 className="header__subtitle">{subTitle}</h2>
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
          Voice Memos
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

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
