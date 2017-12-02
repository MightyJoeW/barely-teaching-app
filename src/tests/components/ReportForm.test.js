import React from "react";
import { shallow } from "enzyme";
import ReportForm from "../../views/Reports/components/ReportForm";
import reports from "../fixtures/reports";

test("should render ReportForm correctly", () => {
  const wrapper = shallow(<ReportForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ReportForm correctly with report data", () => {
  const wrapper = shallow(<ReportForm report={reports[1]} />);
  expect(wrapper).toMatchSnapshot();
});
