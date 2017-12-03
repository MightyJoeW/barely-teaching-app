import React from "react";
import { shallow } from "enzyme";
import reports from "../fixtures/reports";
import { EditReportView } from "../../views/Reports/containers/EditReportView/EditReportView";

let editReport, startRemoveReport, history, wrapper;

beforeEach(() => {
  editReport = jest.fn();
  startRemoveReport = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditReportView
      editReport={editReport}
      startRemoveReport={startRemoveReport}
      history={history}
      report={reports[2]}
    />
  );
});

test("should render EditReportView", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editReport", () => {
  wrapper.find("ReportForm").prop("onSubmit")(reports[2]);
  expect(history.push).toHaveBeenLastCalledWith("/reports");
  expect(editReport).toHaveBeenLastCalledWith(reports[2].id, reports[2]);
});

test("should handle startRemoveReport", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/reports");
  expect(startRemoveReport).toHaveBeenLastCalledWith({
    id: reports[2].id
  });
});
