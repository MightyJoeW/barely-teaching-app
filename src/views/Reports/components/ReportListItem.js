import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ReportListItem = ({ id, student_name, period, createdAt }) => (
  <Link className="list-item" to={`/reports/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{student_name} </h3>
      <span className="list-item__subtitle">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data"> {numeral(period).format("0o")} </h3>
  </Link>
);

export default ReportListItem;
