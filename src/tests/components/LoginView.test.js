import React from "react";
import { shallow } from "enzyme";
import { LoginView } from "../../views/login-view/login-view";
import reports from "../fixtures/reports";

test("should correctly render LoginView", () => {
  const wrapper = shallow(<LoginView />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on button click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginView startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
