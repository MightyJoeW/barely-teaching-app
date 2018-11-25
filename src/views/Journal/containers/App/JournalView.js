import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

//MATERIAL-UI
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

// application containers
import JournalHeader from "../JournalHeader/JournalHeader";
import RecordView from "../RecordView/RecordView";
import RecordingsView from "../RecordingsView/RecordingsView";
import DetailsView from "..//DetailsView/DetailsView";

/* actions */
import * as audioActionCreators from "../../../../redux/actions/actions-audios";

OfflinePluginRuntime.install();

export class JournalView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.audio.getAllRecordings();
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <BrowserRouter>
            <div>
              <JournalHeader />
              <div className="container">
                <Switch>
                  <Route path="/journal/record" component={RecordView} />
                  <Route
                    path="/journal/recordings"
                    component={RecordingsView}
                  />
                  <Route path="/recording:id" component={RecordingsView} />
                  <Redirect from="/journal" to="/journal/record" />
                </Switch>
              </div>
              <DetailsView />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      audio: bindActionCreators(audioActionCreators, dispatch)
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(JournalView);
