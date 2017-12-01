import React from "react";
import { connect } from "react-redux";
import ReportListItem from "./ReportListItem";
import selectReports from "../selectors/reports";

export const ReportList = props => (
  <div>
    {props.reports.length === 0 ? (
      <p>No reports</p>
    ) : (
      props.reports.map(report => {
        return <ReportListItem key={report.id} {...report} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    reports: selectReports(state.reports, state.filters)
  };
};

export default connect(mapStateToProps)(ReportList);
