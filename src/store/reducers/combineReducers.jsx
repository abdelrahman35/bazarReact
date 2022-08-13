import { combineReducers } from "redux";
import {
  userChangePasswordReducer,
  userLoginReducers,
  userRegisterReducer,
} from "./userReducers";
import {
  getAllCategoriesReducer,
  createCategoryReducer,
  deleteCategoryReducer,
} from "./categoriesReducers";
import {
  getAllProductsReducer,
  getProductByIdReducer,
  createProductReducer,
  filterProductsReducer,
} from "./productReducers";
import {
  cancelOrderIfPendingReducer,
  getUserOrdersReducer,
  listAllOrdersReducer,
  orderDetailsForAdminReducer,
} from "./ordersReducers";
import { cartReducer } from "./cartReducers";
export default combineReducers({
  // userReducers
  userRegister: userRegisterReducer,
  userLogin: userLoginReducers,
  changePassword: userChangePasswordReducer,
  // categoryReducers
  allCategories: getAllCategoriesReducer,
  createCategory: createCategoryReducer,
  deleteCategoryState: deleteCategoryReducer,
  // productReducers
  allProducts: getAllProductsReducer,
  createdProduct: createProductReducer,
  oneProduct: getProductByIdReducer,
  filteredProducts: filterProductsReducer,
  // orderReducers
  allOrders: listAllOrdersReducer,
  orderDetailsForAdmin: orderDetailsForAdminReducer,
  userOrders: getUserOrdersReducer,
  cancelOrder: cancelOrderIfPendingReducer,
  // cart reducers
  cart: cartReducer,
});
