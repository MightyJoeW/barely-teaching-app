import React from "react";
import JournalHeader from "../JournalHeader/JournalHeader";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import RecordView from "../RecordView/RecordView";

//MATERIAL-UI
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const JournalView = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <JournalHeader />
      <div className="container">
        <LeftNavBar />
      </div>
    </div>
  </MuiThemeProvider>
);

export default JournalView;
