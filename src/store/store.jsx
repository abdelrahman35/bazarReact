import reducers from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const userFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;
const stateFromLocalStorage = {
  userLogin: { userInfo: userFromLocalStorage },
};
const store = createStore(
  reducers,
  stateFromLocalStorage,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
