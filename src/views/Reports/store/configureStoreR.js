import { createStore, combineReducers } from "redux";
import reportsReducer from "../reducers/reports";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      reports: reportsReducer,
      filters: filtersReducer
    })
  );

  return store;
};
