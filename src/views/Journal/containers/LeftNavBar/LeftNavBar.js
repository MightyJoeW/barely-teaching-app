import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Drawer, AppBar, Divider } from "material-ui";

/* component styles */
import { styles } from "./styles.scss";

/* actions */
import * as uiActionCreators from "../../core/actions/actions-ui";

class LeftNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  closeNav = () => {
    this.props.actions.ui.closeNav();
  };

  render() {
    return (
      <div className={styles}>
        <Drawer
          docked={false}
          open={this.props.ui.leftNavOpen}
          onRequestChange={this.closeNav}
        >
          <AppBar title="VentZone" />

          <h1> Hello </h1>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);
