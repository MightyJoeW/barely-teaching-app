import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBar from "../../components/AppBar/AppBar";
import Navigation from "../../components/Navigation/Navigation";
import { withRouter } from "react-router-dom";

/* actions */
import * as uiActionCreators from "../../../../ducks/actions/actions-ui";

/* component styles */
import { styles } from "./styles.scss";

class JournalHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = () => {
    this.props.actions.ui.openNav();
  };

  render() {
    return (
      <div className={styles}>
        {/*<AppBar onLeftIconButtonClick={this.handleToggle} />*/}
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JournalHeader)
);
