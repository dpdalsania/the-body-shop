import { combineReducers } from "redux";
import cart from "./shopping";



export const appReducer = combineReducers({
  cart,
 
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
