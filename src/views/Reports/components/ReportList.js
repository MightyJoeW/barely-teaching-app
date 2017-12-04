import React from "react";
import { connect } from "react-redux";
import ReportListItem from "./ReportListItem";
import selectReports from "../selectors/reports";

export const ReportList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Students</div>
      <div className="show-for-desktop">Student</div>
      <div className="show-for-desktop">Period</div>
    </div>
    <div className="list-body">
      {props.reports.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No reports</span>
        </div>
      ) : (
        props.reports.map(report => {
          return <ReportListItem key={report.id} {...report} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    reports: selectReports(state.reports, state.filters)
  };
};

export default connect(mapStateToProps)(ReportList);
