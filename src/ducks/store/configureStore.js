import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

//REDUCERS
import reports from "../reducers/reports";
import filters from "../reducers/filters";
import ui from "../reducers/reducer_ui";
import audio from "../reducers/reducer_audio";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true,
    predicate: () => process.env.NODE_ENV === "development"
  });

  let store = createStore(
    combineReducers({
      reports,
      filters,
      ui,
      audio
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
