import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import ReportsHeader from "../../views/Reports/containers/ReportsHeader/ReportsHeader";

test("should render Header correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<ReportsHeader />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
