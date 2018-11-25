import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddReport,
  addReport,
  editReport,
  startEditReport,
  removeReport,
  startRemoveReport,
  setReports,
  startSetReports
} from "../../redux/actions/reports";
import reports from "../fixtures/reports";
import database from "../../firebase/firebase";

const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const reportsData = {};
  reports.forEach(({ id, student_name, note, period, createdAt }) => {
    reportsData[id] = { student_name, note, period, createdAt };
  });
  database
    .ref(`users/${uid}/reports`)
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

test("should remove report from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = reports[2].id;
  store
    .dispatch(startRemoveReport({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_REPORT",
        id
      });
      return database.ref(`users/${uid}/reports/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("should edit report from firebase", done => {
  const store = createMockStore({ defaultAuthState });
  const id = reports[0].id;
  const updates = { period: 8 };
  store
    .dispatch(startEditReport(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_REPORT",
        id,
        updates
      });
      return database.ref(`users/${uid}/reports/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
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
  const store = createMockStore({ defaultAuthState });
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

      return database
        .ref(`users/${uid}/reports/${actions[0].report.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(reportData);
      done();
    });
});

test("should add report with defaults to database and store", done => {
  const store = createMockStore({ defaultAuthState });
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

      return database
        .ref(`users/${uid}/reports/${actions[0].report.id}`)
        .once("value");
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
  const store = createMockStore({ defaultAuthState });
  store.dispatch(startSetReports()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_REPORTS",
      reports
    });
    done();
  });
});
