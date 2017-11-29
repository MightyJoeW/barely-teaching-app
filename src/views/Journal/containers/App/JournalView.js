import React from "react";
import JournalHeader from "../JournalHeader/JournalHeader";
import JournalSubheader from "../JournalSubheader/JournalSubheader";
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
      {/* <JournalSubheader /> */}
      <div className="container">
        <h1> (Mic image) </h1>
        <h1> (Soundwave visual) </h1>
        <h1> (Recording time) </h1>
        <h1> Mic photo incoming </h1>
        {/* <LeftNavBar /> */}
      </div>
    </div>
  </MuiThemeProvider>
);

export default JournalView;
