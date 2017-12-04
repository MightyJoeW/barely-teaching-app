import React from "react";
import { Link } from "react-router-dom";

const ReportsHeader = () => (
  <header className="reports-header">
    <div classsName="content-container">
      <Link className="reports-header__title" to="/reports">
        <h1> Student Behavior Reports </h1>
        <div className="reports-header__actions">
          <Link className="login-button" to="/reports/create">
            Create Report
          </Link>
        </div>
      </Link>
    </div>
  </header>
);

export default ReportsHeader;
