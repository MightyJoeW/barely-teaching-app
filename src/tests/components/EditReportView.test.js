import React from "react";
import { shallow } from "enzyme";
import reports from "../fixtures/reports";
import { EditReportView } from "../../views/Reports/containers/EditReportView/EditReportView";

let startEditReport, startRemoveReport, history, wrapper;

beforeEach(() => {
  startEditReport = jest.fn();
  startRemoveReport = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditReportView
      startEditReport={startEditReport}
      startRemoveReport={startRemoveReport}
      history={history}
      report={reports[2]}
    />
  );
});

test("should render EditReportView", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditReport", () => {
  wrapper.find("ReportForm").prop("onSubmit")(reports[2]);
  expect(history.push).toHaveBeenLastCalledWith("/reports");
  expect(startEditReport).toHaveBeenLastCalledWith(reports[2].id, reports[2]);
});

test("should handle startRemoveReport", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/reports");
  expect(startRemoveReport).toHaveBeenLastCalledWith({
    id: reports[2].id
  });
});
