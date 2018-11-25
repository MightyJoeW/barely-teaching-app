import constants from "../types";

const initialState = {
  leftNavOpen: false,
  rightNavOpen: false
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_NAV:
      return Object.assign({}, state, { leftNavOpen: true });

    case constants.CLOSE_NAV:
      return Object.assign({}, state, { leftNavOpen: false });

    case constants.OPEN_RIGHT_NAV:
      return Object.assign({}, state, { rightNavOpen: true });

    case constants.CLOSE_RIGHT_NAV:
      return Object.assign({}, state, { rightNavOpen: false });

    default:
      return state;
  }
}

/**
 * openNav - Open the side nav
 */
export function openNav() {
  return {
    type: constants.OPEN_NAV
  };
}

/**
 * closeNav - Close the side nav
 */
export function closeNav() {
  return {
    type: constants.CLOSE_NAV
  };
}

/**
 * openRightNav - Open the right side nav
 */
export function openRightNav() {
  return {
    type: constants.OPEN_RIGHT_NAV
  };
}

/**
 * closeRightNav - Close the right side nav
 */
export function closeRightNav() {
  return {
    type: constants.CLOSE_RIGHT_NAV
  };
}
