import uuid from "uuid";
import database from "../../firebase/firebase";

// ADD_REPORT
export const addReport = report => ({
  type: "ADD_REPORT",
  report
});

export const startAddReport = (reportData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      student_name = "",
      note = "",
      period = 0,
      createdAt = 0
    } = reportData;
    const report = { student_name, note, period, createdAt };

    return database
      .ref(`users/${uid}/reports`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/reports/${id}`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/reports/${id}`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/reports`)
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
