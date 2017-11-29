import { createStore } from "redux";

// ACTION CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET = "SET";
const RESET = "RESET";

//ACTION CREATORS - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: INCREMENT,
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: DECREMENT,
  decrementBy
});

const setCount = ({ count }) => ({
  type: SET,
  count
});

const resetCount = () => ({
  type: RESET
});

//REDUCERS
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.incrementBy };
    case DECREMENT:
      return { count: state.count - action.decrementBy };
    case SET:
      return { count: action.count };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//print state everytime it changes
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
