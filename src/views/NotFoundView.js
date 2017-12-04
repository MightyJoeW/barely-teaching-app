import React from "react";
import { Link } from "react-router-dom";

const NotFoundView = () => (
  <div className="content-container">
    404 - Page Not Found...feels bad.
    <br />
    <br />
    <Link className="header__nav" to="/tasks">
      Go Home
    </Link>
  </div>
);

export default NotFoundView;
