import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import preferencesReducer from "./preferencesReducer";

const rootReducer = combineReducers({
  locationState: locationReducer,
  preferencesState: preferencesReducer,
});

export default rootReducer;
