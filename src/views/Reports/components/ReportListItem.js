import React from "react";
import { connect } from "react-redux";
import { removeReport } from "../actions/reports";
const ReportListItem = ({ dispatch, id, student_name, period, createdAt }) => (
  <div>
    <h3>{student_name} </h3>
    <p>
      {period} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeReport({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ReportListItem);
