import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../components/loading-page";

test("should correctly render LoadingPage", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
