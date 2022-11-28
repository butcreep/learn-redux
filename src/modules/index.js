import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";


// 리듀서 합침
const rootReducer= combineReducers({
  counter,
  todos
})

export default rootReducer;