import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault(); //prevents full page refresh

    const option = e.target.elements.option.value.trim(); // .trim removes whitespace
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    // if no error, clear input
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button"> Add Option </button>
        </form>
      </div>
    );
  }
}
