import { combineReducers } from "redux";
import reducer from "./app/reducers";

const rootReducer = combineReducers({
  app: reducer,
});

export default rootReducer;
