import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import AddReportView from "../AddReportView/AddReportView";
import EditReportView from "../EditReportView/EditReportView";
import ReportsHeader from "../ReportsHeader/ReportsHeader";
import ReportsNotFoundView from "../ReportsNotFoundView/ReportsNotFoundView";

export default class Reports extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ReportsHeader />
            <Switch>
              <Route path="/reports/create" component={AddReportView} />
              <Route path="/reports/edit/:id" component={EditReportView} />
              {/* <Route component={ReportsNotFoundView} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
