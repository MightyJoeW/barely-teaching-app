import React from "react";
import { Link } from "react-router-dom";

const ReportsNotFoundView = () => (
  <div>
    404 - Page Not Found...feels bad.
    <Link to="/reports">Return to Reports</Link>
  </div>
);

export default ReportsNotFoundView;
