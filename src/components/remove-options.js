// EXTERNAL DEPENDENCIES
import React, { Fragment } from "react";

// Remove text
export const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>

    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

// Options component
const Options = props => (
  <Fragment>
    <div className="widget-header">
      <h3 className="widget-header__title"> Your Options </h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
        hidden={props.options.length === 0}
      >
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget__message"> Add an option to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </Fragment>
);

export default Options;
