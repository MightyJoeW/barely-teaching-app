import React from "react";
import { shallow } from "enzyme";
import ReportsView from "../../views/Reports/containers/App/ReportsView";

test("should render ReportsView correctly", () => {
  const wrapper = shallow(<ReportsView />);
  expect(wrapper).toMatchSnapshot();
});
