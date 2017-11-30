import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByPeriod } from "../actions/filters";

const ReportListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        if (e.target.value === "date") {
          props.dispatch(sortByDate());
        } else if (e.target.value === "period") {
          props.dispatch(sortByPeriod());
        }
      }}
    >
      <option valee="date">Date</option>
      <option value="period">Period</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ReportListFilters);
