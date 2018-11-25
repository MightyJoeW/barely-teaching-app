// EXTERNAL DEPENDENCIES
import React, { Fragment } from "react";

// COMPONENT DEFINITION
export default class AddOptionButton extends React.Component {
  state = {
    error: undefined
  };

  handleAddOptionButton = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // .trim removes whitespace
    const error = this.props.handleAddOptionButton(option);

    this.setState(() => ({ error }));

    // if no error, clear input
    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        {error && <p className="add-option-error">{error}</p>}
        <form className="add-option" onSubmit={this.handleAddOptionButton}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button"> Add Option </button>
        </form>
      </Fragment>
    );
  }
}
