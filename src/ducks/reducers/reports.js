// Reports Reducer

const reportsReducerDefaultState = [];

export default (state = reportsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_REPORT":
      return [...state, action.report];
    case "REMOVE_REPORT":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_REPORT":
      return state.map(report => {
        if (report.id === action.id) {
          return { ...report, ...action.updates };
        } else {
          return report;
        }
      });
    default:
      return state;
  }
};
