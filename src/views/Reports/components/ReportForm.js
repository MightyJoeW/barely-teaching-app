import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ReportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student_name: props.report ? props.report.student_name : "",
      note: props.report ? props.report.note : "",
      period: props.report ? (props.report.period / 100).toString() : "",
      createdAt: props.report ? moment(props.report.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }
  onStudentNameChange = e => {
    const student_name = e.target.value;
    this.setState(() => ({ student_name }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onPeriodChange = e => {
    const period = e.target.value;
    if (period > 0 && period < 10) {
      this.setState(() => ({ period }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.student_name || !this.state.period) {
      this.setState(() => ({
        error: "Please provide student name and their period."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        student_name: this.state.student_name,
        period: parseFloat(this.state.period, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            autoFocus
            value={this.state.student_name}
            onChange={this.onStudentNameChange}
          />
          <input
            type="number"
            placeholder="Period"
            value={this.state.period}
            onChange={this.onPeriodChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your reward or discpline (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Report</button>
        </form>
      </div>
    );
  }
}
