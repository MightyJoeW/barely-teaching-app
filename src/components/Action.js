import React from "react";

const Action = props => (
  <div>
    <p>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?{" "}
      </button>
    </p>
  </div>
);

export default Action;
