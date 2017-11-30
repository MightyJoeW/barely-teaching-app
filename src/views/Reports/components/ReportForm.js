import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ReportForm extends Component {
  state = {
    student_name: "",
    note: "",
    period: "",
    createdAt: moment(),
    calendarFocused: false
  };
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
    if (period > 0 && period <= 10) {
      this.setState(() => ({ period }));
    }
  };
  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
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
