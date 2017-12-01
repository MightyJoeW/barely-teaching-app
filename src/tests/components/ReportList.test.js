import React from "react";
import { shallow } from "enzyme";
import { ReportList } from "../../views/Reports/components/ReportList";
import reports from "../fixtures/reports";

test("should render ReportList with reports", () => {
  const wrapper = shallow(<ReportList reports={reports} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ReportList with empty message", () => {
  const wrapper = shallow(<ReportList reports={[]} />);
  expect(wrapper).toMatchSnapshot();
});
