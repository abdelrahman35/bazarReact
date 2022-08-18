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
const stockFromLocalStorage = localStorage.getItem("cartStock")
  ? JSON.parse(localStorage.getItem("cartStock"))
  : [];
export const addressArrayFromLocalStorage = localStorage.getItem("address")
  ? JSON.parse(localStorage.getItem("address"))
  : [];
export const favouritesArrayFromLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];
console.log(localStorage.getItem("wishlist"));
const stateFromLocalStorage = {
  userLogin: { userInfo: userFromLocalStorage },
  cart: { cartItems: cartFromLocalStorage, stock: stockFromLocalStorage },
  addAddress: { address: addressArrayFromLocalStorage },
  favouritesProducts: { favourites: favouritesArrayFromLocalStorage },
};

const store = createStore(
  reducers,
  stateFromLocalStorage,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
