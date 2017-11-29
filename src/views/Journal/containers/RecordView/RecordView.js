import React, { Component } from "react";

import { styles } from "./styles.scss";

class RecordView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles}>Record View</div>
      </div>
    );
  }
}

export default RecordView;
