import React from "react";
import { Link } from "react-router-dom";

const NotFoundView = () => (
  <div>
    404 - Page Not Found...feels bad. <Link to="/">Return to Dashboard</Link>
  </div>
);

export default NotFoundView;
