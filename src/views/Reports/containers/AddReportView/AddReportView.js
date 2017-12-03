import React, { Component } from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import { addReport } from "../../../../ducks/actions/reports";

export class AddReportView extends Component {
  onSubmit = report => {
    this.props.addReport(report);
    this.props.history.push("/reports");
  };
  render() {
    return (
      <div>
        <h1>Add Report</h1>
        <ReportForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addReport: report => dispatch(addReport(report))
});

export default connect(undefined, mapDispatchToProps)(AddReportView);
