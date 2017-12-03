import React from "react";
import { shallow } from "enzyme";
import reports from "../fixtures/reports";
import { EditReportView } from "../../views/Reports/containers/EditReportView/EditReportView";

let editReport, removeReport, history, wrapper;

beforeEach(() => {
  editReport = jest.fn();
  removeReport = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditReportView
      editReport={editReport}
      removeReport={removeReport}
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

test("should handle removeReport", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/reports");
  expect(removeReport).toHaveBeenLastCalledWith({
    id: reports[2].id
  });
});
