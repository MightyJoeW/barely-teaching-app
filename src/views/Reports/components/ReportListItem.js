import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ReportListItem = ({ id, student_name, period, createdAt }) => (
  <div>
    <Link to={`/reports/edit/${id}`}>
      <h3>{student_name} </h3>
    </Link>
    <p>
      {numeral(period).format("0o")}
      -
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default ReportListItem;
