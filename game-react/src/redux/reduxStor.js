import { createStore, combineReducers } from "redux";
import comandReducer from "./comandReducer";

let redusers = combineReducers({
  Comands: comandReducer
});

let stor = createStore(redusers);

export default stor;