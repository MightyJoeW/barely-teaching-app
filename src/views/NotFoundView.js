import React from "react";
import { Link } from "react-router-dom";

const NotFoundView = () => (
  <div>
    404 - Page Not Found...this feels bad. <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundView;
