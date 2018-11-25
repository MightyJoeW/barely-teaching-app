// EXTERNAL DEPENDENCIES
import React, { Component } from "react";

// COMPONENT DEFINITION
export default class SummerCalc extends Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    alert(`${this.state.value} more days until summer!`);
    e.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter last day of school
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
