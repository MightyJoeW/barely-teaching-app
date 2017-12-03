import reportsReducer from "../../ducks/reducers/reports";
import reports from "../fixtures/reports";

test("should set default state", () => {
  const state = reportsReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove report by id", () => {
  const action = {
    type: "REMOVE_REPORT",
    id: reports[1].id
  };
  const state = reportsReducer(reports, action);
  expect(state).toEqual([reports[0], reports[2]]);
});

test("should not remove reports if id not found", () => {
  const action = {
    type: "REMOVE_REPORT",
    id: "-1"
  };
  const state = reportsReducer(reports, action);
  expect(state).toEqual(reports);
});

test("should add a report", () => {
  const report = {
    id: "109",
    student_name: "Tristan",
    note: "",
    createdAt: 20000,
    period: 2
  };
  const action = {
    type: "ADD_REPORT",
    report
  };
  const state = reportsReducer(reports, action);
  expect(state).toEqual([...reports, report]);
});

test("should edit a report", () => {
  const period = 5;
  const action = {
    type: "EDIT_REPORT",
    id: reports[1].id,
    updates: {
      period
    }
  };
  const state = reportsReducer(reports, action);
  expect(state[1].period).toBe(period);
});

test("should not edit a report if id not found", () => {
  const period = 5;
  const action = {
    type: "EDIT_REPORT",
    id: "-1",
    updates: {
      period
    }
  };
  const state = reportsReducer(reports, action);
  expect(state).toEqual(reports);
});

test("should set reports", () => {
  const action = {
    type: "SET_REPORTS",
    reports: [reports[1]]
  };
  const state = reportsReducer(reports, action);
  expect(state).toEqual([reports[1]]);
});
