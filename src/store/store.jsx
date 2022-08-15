import reducers from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const userFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;
const cartFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const addressArrayFromLocalStorage = localStorage.getItem("address")
  ? JSON.parse(localStorage.getItem("address"))
  : [];
const stateFromLocalStorage = {
  userLogin: { userInfo: userFromLocalStorage },
  cart: { cartItems: cartFromLocalStorage },
  addAddress: { address: addressArrayFromLocalStorage },
};

const store = createStore(
  reducers,
  stateFromLocalStorage,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
