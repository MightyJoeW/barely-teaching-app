import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
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

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ReportForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set student_name on input change", () => {
  const value = "New student_name";
  const wrapper = shallow(<ReportForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("student_name")).toBe(value);
});

test("should set note on textarea change", () => {
  const value = "New note value";
  const wrapper = shallow(<ReportForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set period if valid input", () => {
  const value = "4";
  const wrapper = shallow(<ReportForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("period")).toBe(value);
});

test("should not set period if invalid input", () => {
  const value = "11";
  const wrapper = shallow(<ReportForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("period")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ReportForm report={reports[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    student_name: reports[0].student_name,
    period: reports[0].period,
    note: reports[0].note,
    createdAt: reports[0].createdAt
  });
});

// test("should set new date on date change", () => {
//   const now = moment();
//   const wrapper = shallow(<ReportForm />);
//   wrapper.find("SingleDatePicker").prop("onDateChange")(now);
//   expect(wrapper.state("createdAt")).toEqual(now);
// });

// test("should set calendar focus on change", () => {
//   const focused = true;
//   const wrapper = shallow(<ReportForm />);
//   wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
//   expect(wrapper.state("calendarFocused")).toBe(focused);
// });
