import React from "react";
import { NavLink } from "react-router-dom";

const JournalHeader = () => (
  <div className="journal-header">
    <div className="container">
      <div className="journal-nav">
        <NavLink to="/record" activeClassName="is-active" exact={true}>
          Record
        </NavLink>
        <NavLink to="/recordings" activeClassName="is-active">
          Listen
        </NavLink>
      </div>
    </div>
  </div>
);
export default JournalHeader;
