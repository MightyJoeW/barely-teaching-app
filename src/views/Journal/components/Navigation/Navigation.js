// EXTERNAL DEPENDENCIES
import React, { Component } from "react";
import { Tabs, Tab } from "material-ui";
import { withRouter } from "react-router-dom";

//Navigation styles
import { styles } from "./styles.scss";

// COMPONENT DEFINITION
class Navigation extends Component {
  state = { currentRoute: "/journal/record" };

  //highlight listen tab when saving and rerouting to recordings
  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location;
    this.handleChange(pathname, false);
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    this.handleChange(pathname, false);
  }

  handleChange = (route, updateURL) => {
    this.setState({
      currentRoute: route
    });

    if (updateURL !== false) {
      this.pushRoute(route);
    }
  };

  pushRoute(route) {
    const { history } = this.props;

    switch (route) {
      case "/journal/record":
        history.push("/journal/record");
        break;
      case "/journal/recordings":
        history.push("/journal/recordings");
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
