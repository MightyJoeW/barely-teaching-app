import React from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import { addReport } from "../../actions/reports";

const AddReportView = props => (
  <div>
    <h1> Add Report </h1>
    <ReportForm
      onSubmit={report => {
        props.dispatch(addReport(report));
        props.history.push("/reports");
      }}
    />
  </div>
);

export default connect()(AddReportView);
