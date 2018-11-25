// EXTERNAL DEPENDENCIES
import React, { Component, Fragment } from "react";

// LOCAL DEPENDENCIES
import ActionButton from "../../components/action-button";
import AddOptionButton from "../../components/add-option-button";
import OptionModal from "../../components/option-modal";
import RemoveOptions from "../../components/remove-options";

// COMPONENT DEFINITION
export default class Tasks extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOptionButton = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing at all
    }
  }

  //save the data to localStorage after anything changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const { options, selectedOption } = this.state;
    return (
      <Fragment>
        <div className="container">
          <ActionButton
            hasOptions={options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <RemoveOptions
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptionButton
              handleAddOptionButton={this.handleAddOptionButton}
            />
          </div>
        </div>

        <OptionModal
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </Fragment>
    );
  }
}
