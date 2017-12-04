import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import AddReportView from "../AddReportView/AddReportView";
import EditReportView from "../EditReportView/EditReportView";
import ReportsHeader from "../ReportsHeader/ReportsHeader";
import ReportsNotFoundView from "../ReportsNotFoundView/ReportsNotFoundView";
import ReportList from "../../components/ReportList";
import ReportListFilters from "../../components/ReportListFilters";

export default class Reports extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {
              // <ReportList />
            }
            <Switch>
              <Route exact path="/reports" component={ReportList} />
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
