import { combineReducers, legacy_createStore } from "redux";
import counter from "./counter";
const reducer = combineReducers({
  counter,
});
export const store = legacy_createStore(reducer);
