import React, { Component } from "react";
import { connect } from "react-redux";
import ReportForm from "../../components/ReportForm";
import {
  editReport,
  startRemoveReport
} from "../../../../ducks/actions/reports";

export class EditReportView extends Component {
  onSubmit = report => {
    this.props.editReport(this.props.report.id, report);
    this.props.history.push("/reports");
  };
  onRemove = () => {
    this.props.startRemoveReport({ id: this.props.report.id });
    this.props.history.push("/reports");
  };
  render() {
    return (
      <div>
        <ReportForm report={this.props.report} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  report: state.reports.find(report => report.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editReport: (id, report) => dispatch(editReport(id, report)),
  startRemoveReport: data => dispatch(startRemoveReport(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReportView);
