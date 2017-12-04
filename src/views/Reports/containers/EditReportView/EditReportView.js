import React, { Component } from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import {
  startEditReport,
  startRemoveReport
} from "../../../../ducks/actions/reports";

export class EditReportView extends Component {
  onSubmit = report => {
    this.props.startEditReport(this.props.report.id, report);
    this.props.history.push("/reports");
  };
  onRemove = () => {
    this.props.startRemoveReport({ id: this.props.report.id });
    this.props.history.push("/reports");
  };
  render() {
    return (
      <div>
        <div className="">
          <div className="content-container">
            <h1 className="reports-header__title"> Edit Report </h1>
          </div>
        </div>
        <div className="content-container">
          <ReportForm report={this.props.report} onSubmit={this.onSubmit} />
          <button
            className="login-button button--secondary"
            onClick={this.onRemove}
          >
            Remove Report
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  report: state.reports.find(report => report.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditReport: (id, report) => dispatch(startEditReport(id, report)),
  startRemoveReport: data => dispatch(startRemoveReport(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReportView);
