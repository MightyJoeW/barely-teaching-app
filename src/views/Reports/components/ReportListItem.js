import React from "react";
import { Link } from "react-router-dom";
const ReportListItem = ({ id, student_name, period, createdAt }) => (
  <div>
    <Link to={`/reports/edit/${id}`}>
      <h3>{student_name} </h3>
    </Link>
    <p>
      {period} - {createdAt}
    </p>
  </div>
);

export default ReportListItem;
