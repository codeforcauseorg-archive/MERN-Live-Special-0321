import {
  INCREASE_ACTION,
  DECREASE_ACTION,
  SET_ACTION,
} from "../actions/countActions";

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ACTION: {
      let copy = { ...state };
      copy.count += 1;
      return copy;
    }

    case DECREASE_ACTION: {
      let copy = { ...state };
      copy.count -= 1;
      return copy;
    }

    case SET_ACTION: {
      const payload = action.payload;
      let copy = { ...state };
      copy.count = payload;
      return copy;
    }

    default: {
      return state;
    }
  }
};
