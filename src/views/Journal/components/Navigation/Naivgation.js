import React from "react";
import { Tabs, Tab } from "material-ui";

/* component styles */
import { styles } from "./styles.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <Tabs className="tabs">
          <Tab label="Record" value={"/record"} />
          <Tab label="Listen" value={"/recordings"} />
        </Tabs>
      </div>
    );
  }
}

export default Navigation;
