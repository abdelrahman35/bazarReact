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
const addressArrayFromLocalStorage = localStorage.getItem("address")
  ? JSON.parse(localStorage.getItem("address"))
  : [];
const favouritesArrayFromLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromLocalStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";
const stateFromLocalStorage = {
  userLogin: { userInfo: userFromLocalStorage },
  cart: {
    cartItems: cartFromLocalStorage,
    stock: stockFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },
  addAddress: { address: addressArrayFromLocalStorage },
  favouritesProducts: { favourites: favouritesArrayFromLocalStorage },
};

const store = createStore(
  reducers,
  stateFromLocalStorage,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
