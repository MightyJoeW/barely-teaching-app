import React from "react";
import { shallow } from "enzyme";
import reports from "../fixtures/reports";
import ReportListItem from "../../views/Reports/components/ReportListItem";

test("should render ReportListItem correctly", () => {
  const wrapper = shallow(<ReportListItem {...reports[0]} />);
  expect(wrapper).toMatchSnapshot();
});
