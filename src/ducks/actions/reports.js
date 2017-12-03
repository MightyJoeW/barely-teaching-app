import uuid from "uuid";
import database from "../../firebase/firebase";

// ADD_REPORT
export const addReport = report => ({
  type: "ADD_REPORT",
  report
});

export const startAddReport = (reportData = {}) => {
  return dispatch => {
    const {
      student_name = "",
      note = "",
      period = 0,
      createdAt = 0
    } = reportData;
    const report = { student_name, note, period, createdAt };

    return database
      .ref("reports")
      .push(report)
      .then(ref => {
        dispatch(
          addReport({
            id: ref.key,
            ...report
          })
        );
      });
  };
};

// REMOVE_REPORT
export const removeReport = ({ id } = {}) => ({
  type: "REMOVE_REPORT",
  id
});

export const startRemoveReport = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`reports/${id}`)
      .remove()
      .then(() => {
        dispatch(removeReport({ id }));
      });
  };
};

// EDIT_REPORT
export const editReport = (id, updates) => ({
  type: "EDIT_REPORT",
  id,
  updates
});

export const startEditReport = (id, updates) => {
  return dispatch => {
    return database
      .ref(`reports/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editReport(id, updates));
      });
  };
};

// SET_REPORTS
export const setReports = reports => ({
  type: "SET_REPORTS",
  reports
});

export const startSetReports = () => {
  return dispatch => {
    return database
      .ref("reports")
      .once("value")
      .then(snapshot => {
        const reports = [];

        snapshot.forEach(childSnapshot => {
          reports.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setReports(reports));
      });
  };
};
