import React from "react";
import { connect } from "react-redux";
import ReportListItem from "./ReportListItem";
import selectReports from "../selectors/reports";

const ReportList = props => (
  <div>
    <h1> Report List </h1>
    {props.reports.map(report => {
      return <ReportListItem key={report.id} {...report} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    reports: selectReports(state.reports, state.filters)
  };
};

export default connect(mapStateToProps)(ReportList);
