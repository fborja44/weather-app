import { combineReducers } from "redux";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  locationState: locationReducer,
});

export default rootReducer;
