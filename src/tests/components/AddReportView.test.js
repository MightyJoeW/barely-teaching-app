import React from "react";
import { shallow } from "enzyme";
import { AddReportView } from "../../views/Reports/containers/AddReportView/AddReportView";
import reports from "../fixtures/reports";

let startAddReport, history, wrapper;

beforeEach(() => {
  startAddReport = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddReportView startAddReport={startAddReport} history={history} />
  );
});

test("should render AddReportView correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ReportForm").prop("onSubmit")(reports[1]);
  expect(history.push).toHaveBeenLastCalledWith("/reports");
  expect(startAddReport).toHaveBeenLastCalledWith(reports[1]);
});
