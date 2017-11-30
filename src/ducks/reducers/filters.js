import moment from "moment";

const SET_TEXT_FILTER = "SET_TEXT_FILTER";
const SORT_BY_PERIOD = "SORT_BY_PERIOD";
const SORT_BY_DATE = "SORT_BY_DATE";
const SET_START_DATE = "SET_START_DATE";
const SET_END_DATE = "SET_END_DATE";

const initialState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORT_BY_PERIOD:
      return { ...state, sortBy: "period" };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: "date"
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// SET_TEXT_FILTER
export function setTextFilter(text = "") {
  return {
    type: SET_TEXT_FILTER,
    payload: text
  };
}

// SORT_BY_DATE
export function sortByDate() {
  return {
    type: SORT_BY_DATE
  };
}

// SORT_BY_PERIOD
export function sortByPeriod() {
  return {
    type: SORT_BY_PERIOD
  };
}

// SET_START_DATE
export function setStartDate() {
  return {
    type: SET_START_DATE,
    payload: startDate
  };
}

// SET_END_DATE
export function setEndDate() {
  return {
    type: SET_END_DATE,
    payload: endDate
  };
}
