import React from "react";

/* component styles */
import { styles } from "./styles.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles}>nav component</div>;
  }
}

export default Navigation;
