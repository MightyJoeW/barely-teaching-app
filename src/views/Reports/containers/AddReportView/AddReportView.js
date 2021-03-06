import React, { Component } from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import { startAddReport } from "../../../../ducks/actions/reports";

export class AddReportView extends Component {
  onSubmit = report => {
    this.props.startAddReport(report);
    this.props.history.push("/reports");
  };
  render() {
    return (
      <div>
        <div className="">
          <div className="content-container">
            <h1 className="reports-header__title">Add Report</h1>
          </div>
        </div>
        <div className="content-container">
          <ReportForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddReport: report => dispatch(startAddReport(report))
});

export default connect(undefined, mapDispatchToProps)(AddReportView);
