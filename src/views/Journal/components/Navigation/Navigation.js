import React from "react";
import { Tabs, Tab } from "material-ui";
import { withRouter } from "react-router-dom";

/* component styles */
import { styles } from "./styles.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentRoute: "/journal/record" };
  }

  handleChange = (route, updateURL) => {
    this.setState({
      currentRoute: route
    });
  };

  pushRoute(route) {
    const { history } = this.props;

    switch (route) {
      case "journal/record":
        history.push("journal/record");
        break;
      case "journal/recordings":
        history.push("journal/recordings");
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={styles}>
        <Tabs
          className="tabs"
          value={this.state.currentRoute}
          onChange={this.handleChange}
        >
          <Tab label="Record" value={"/journal/record"} />
          <Tab label="Listen" value={"/journal/recordings"} />
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Navigation);
