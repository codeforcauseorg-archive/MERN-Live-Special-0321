import { createStore } from "redux";
import { countReducer } from "../reducers/countReducer";

export const store = createStore(countReducer);
