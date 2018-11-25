import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import { startAddReport } from "../../../../redux/actions/reports";

export class AddReportView extends Component {
  onSubmit = report => {
    this.props.startAddReport(report);
    this.props.history.push("/reports");
  };
  render() {
    return (
      <Fragment>
        <div className="">
          <div className="content-container">
            <h1 className="reports-header__title">Add Report</h1>
          </div>
        </div>
        <div className="content-container">
          <ReportForm onSubmit={this.onSubmit} />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddReport: report => dispatch(startAddReport(report))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddReportView);
