import { combineReducers } from "redux";
import { uiReducer } from "./reducer-ui";

const rootReducer = combineReducers({
  ui: uiReducer
});

export default rootReducer;
