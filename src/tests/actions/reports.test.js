import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddReport,
  addReport,
  editReport,
  removeReport,
  setReports,
  startSetReports
} from "../../ducks/actions/reports";
import reports from "../fixtures/reports";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const reportsData = {};
  reports.forEach(({ id, student_name, note, period, createdAt }) => {
    reportsData[id] = { student_name, note, period, createdAt };
  });
  database
    .ref("reports")
    .set(reportsData)
    .then(() => done());
});

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
  const action = addReport(reports[2]);
  expect(action).toEqual({
    type: "ADD_REPORT",
    report: reports[2]
  });
});

test("should add report to database and store", done => {
  const store = createMockStore({});
  const reportData = {
    student_name: "Henry",
    period: 2,
    note: "Great day",
    createdAt: 1000
  };
  store
    .dispatch(startAddReport(reportData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_REPORT",
        report: {
          id: expect.any(String),
          ...reportData
        }
      });

      return database.ref(`reports/${actions[0].report.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(reportData);
      done();
    });
});

test("should add report with defaults to database and store", done => {
  const store = createMockStore({});
  const reportDefaults = {
    student_name: "",
    period: 0,
    note: "",
    createdAt: 0
  };
  store
    .dispatch(startAddReport({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_REPORT",
        report: {
          id: expect.any(String),
          ...reportDefaults
        }
      });

      return database.ref(`reports/${actions[0].report.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(reportDefaults);
      done();
    });
});

test("should setup set report action object with data", () => {
  const action = setReports(reports);
  expect(action).toEqual({
    type: "SET_REPORTS",
    reports
  });
});

test("should fetch the reports from firebase", done => {
  const store = createMockStore({});
  store.dispatch(startSetReports()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_REPORTS",
      reports
    });
    done();
  });
});
