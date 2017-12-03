import React from "react";
import { shallow } from "enzyme";
import LoginView from "../../views/LoginView/LoginView";
import reports from "../fixtures/reports";

test("should correctly render LoginView", () => {
  const wrapper = shallow(<LoginView />);
  expect(wrapper).toMatchSnapshot();
});
