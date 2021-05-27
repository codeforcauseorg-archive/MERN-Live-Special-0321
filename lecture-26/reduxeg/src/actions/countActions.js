export const INCREASE_ACTION = "@counter/increase";
export const DECREASE_ACTION = "@counter/decrease";
export const SET_ACTION = "@counter/set";

export function increase() {
  return {
    type: INCREASE_ACTION,
  };
}

export function decrease() {
  return {
    type: DECREASE_ACTION,
  };
}

export function set(value) {
  return {
    type: SET_ACTION,
    payload: value,
  };
}
