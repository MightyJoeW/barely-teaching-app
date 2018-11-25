// EXTERNAL DEPENDENCIES
import React from "react";

// COMPONENT DEFINITION
const ActionButton = props => (
  <button
    className="big-button"
    onClick={props.handlePick}
    disabled={!props.hasOptions}
  >
    What should I do?
  </button>
);

export default ActionButton;
