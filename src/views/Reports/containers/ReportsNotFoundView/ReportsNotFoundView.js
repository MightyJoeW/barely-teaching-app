import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ReportsNotFoundView = () => (
  <Fragment>
    404 - Page Not Found...feels bad.
    <Link to="/reports">Return to Reports</Link>
  </Fragment>
);

export default ReportsNotFoundView;
