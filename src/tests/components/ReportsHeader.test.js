import React from "react";
import { shallow } from "enzyme";
import ReportsHeader from "../../views/Reports/containers/ReportsHeader/ReportsHeader";

test("should render ReportsHeader correctly", () => {
  const wrapper = shallow(<ReportsHeader />);
  expect(wrapper).toMatchSnapshot();
});
