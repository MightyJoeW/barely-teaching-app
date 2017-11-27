import { createStore } from "redux";

// ACTION CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET = "SET";
const RESET = "RESET";

//REDUCER
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
    case DECREMENT:
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
    case SET:
      return { count: action.count };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
});

//print state everytime it changes
store.subscribe(() => {
  console.log(store.getState());
});

// ACTION CREATORS
store.dispatch({
  type: INCREMENT,
  incrementBy: 5
});
store.dispatch({
  type: INCREMENT
});
store.dispatch({
  type: RESET
});
store.dispatch({
  type: DECREMENT
});
store.dispatch({
  type: DECREMENT,
  decrementBy: 10
});
store.dispatch({
  type: SET,
  count: 101
});
