import React from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import { editReport, removeReport } from "../../../../ducks/actions/reports";

const EditReportView = props => {
  return (
    <div>
      <ReportForm
        report={props.report}
        onSubmit={report => {
          props.dispatch(editReport(props.report.id, report));
          props.history.push("/reports");
          console.log("updated", report);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeReport({ id: props.report.id }));
          props.history.push("/reports");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    report: state.reports.find(report => report.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditReportView);
