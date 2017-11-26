import React from "react";

const Action = props => (
  <div>
    <p>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do first?
      </button>
    </p>
  </div>
);

export default Action;
