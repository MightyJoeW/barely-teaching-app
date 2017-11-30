import { addReport, editReport, removeReport } from "../../actions/reports";

test("should setup remove report action object", () => {
  const action = removeReport({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_REPORT",
    id: "123abc"
  });
});

test("should setup edit report action object", () => {
  const action = editReport("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_REPORT",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});
test("should setup add report action object with provided values", () => {
  const reportData = {
    student_name: "Jerry",
    period: 3,
    createdAt: 1000,
    note: "Jerry was good today."
  };
  const action = addReport(reportData);
  expect(action).toEqual({
    type: "ADD_REPORT",
    report: {
      ...reportData,
      id: expect.any(String)
    }
  });
});

test("should setup add report action object with default values", () => {
  const action = addReport();
  expect(action).toEqual({
    type: "ADD_REPORT",
    report: {
      id: expect.any(String),
      student_name: "",
      note: "",
      period: 0,
      createdAt: 0
    }
  });
});
