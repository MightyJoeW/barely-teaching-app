import uuid from "uuid";

// ADD_REPORT
export const addReport = (
  { student_name = "", note = "", period = 0, createdAt = 0 } = {}
) => ({
  type: "ADD_REPORT",
  report: {
    id: uuid(),
    student_name,
    note,
    period,
    createdAt
  }
});

// REMOVE_REPORT
export const removeReport = ({ id } = {}) => ({
  type: "REMOVE_REPORT",
  id
});

// EDIT_REPORT
export const editReport = (id, updates) => ({
  type: "EDIT_REPORT",
  id,
  updates
});
