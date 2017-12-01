import React from "react";
import { Link, NavLink } from "react-router-dom";

const ReportsHeader = () => (
  <header>
    <h1> Viewing Student Behavior Reports </h1>
    <NavLink to="/reports" activeClassName="is-active" exact={true}>
      Reports
    </NavLink>
    <NavLink to="/reports/create" activeClassName="is-active">
      Create Report
    </NavLink>
  </header>
);

export default ReportsHeader;
