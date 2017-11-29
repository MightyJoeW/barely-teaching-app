import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBar from "../../components/AppBar/AppBar";
import Navigation from "../../components/Navigation/Naivgation";

/* actions */
import * as uiActionCreators from "../../core/actions/actions-ui";

/* component styles */
import { styles } from "./styles.scss";

class JournalSubheader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = () => {
    this.props.actions.ui.openNav();
  };

  render() {
    return (
      <div className={styles}>
        <AppBar onLeftIconButtonTouchTap={this.handleToggle} />
        <Navigation />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalSubheader);
