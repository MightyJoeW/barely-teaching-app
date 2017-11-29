import { combineReducers } from "redux";
import { uiReducer } from "./reducer-ui";
import { audioReducer } from "./reducer-audio";

const rootReducer = combineReducers({
  ui: uiReducer,
  audio: audioReducer
});

export default rootReducer;
