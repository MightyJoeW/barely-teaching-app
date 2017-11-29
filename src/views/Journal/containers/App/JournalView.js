import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

//MATERIAL-UI
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

// application containers
import JournalHeader from "../JournalHeader/JournalHeader";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import RecordView from "../RecordView/RecordView";
import RecordingsView from "../RecordingsView/RecordingsView";

injectTapEventPlugin();
OfflinePluginRuntime.install();

const JournalView = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <BrowserRouter>
        <div>
          <JournalHeader />
          <div className="container">
            <Switch>
              <Route path="/journal/record" component={RecordView} />
              <Route path="/journal/recordings" component={RecordingsView} />
              <Redirect from="/journal" to="/journal/record" />
            </Switch>
          </div>
          <LeftNavBar />
        </div>
      </BrowserRouter>
    </div>
  </MuiThemeProvider>
);

export default JournalView;
