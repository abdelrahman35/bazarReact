import { combineReducers } from "redux";
import {
  addNewAddressReducer,
  userChangePasswordReducer,
  userLoginReducers,
  userRegisterReducer,
} from "./userReducers";
import {
  getAllCategoriesReducer,
  createCategoryReducer,
  deleteCategoryReducer,
  updateCategoryReducer,
} from "./categoriesReducers";
import {
  getAllProductsReducer,
  getProductByIdReducer,
  createProductReducer,
  filterProductsReducer,
  deleteProductReducer,
  updateProductReducer,
} from "./productReducers";
import {
  cancelOrderIfPendingReducer,
  createOrderReducer,
  getUserOrdersReducer,
  listAllOrdersReducer,
  orderDetailsForAdminReducer,
} from "./ordersReducers";
import { addToFavouritesReducer, cartReducer } from "./cartReducers";
export default combineReducers({
  // userReducers
  userRegister: userRegisterReducer,
  userLogin: userLoginReducers,
  changePassword: userChangePasswordReducer,
  addAddress: addNewAddressReducer,
  // categoryReducers
  allCategories: getAllCategoriesReducer,
  createCategory: createCategoryReducer,
  deleteCategoryState: deleteCategoryReducer,
  updateCategory: updateCategoryReducer,
  // productReducers
  allProducts: getAllProductsReducer,
  createdProduct: createProductReducer,
  oneProduct: getProductByIdReducer,
  filteredProducts: filterProductsReducer,
  deletedProduct: deleteProductReducer,
  updateProduct: updateProductReducer,
  // orderReducers
  allOrders: listAllOrdersReducer,
  orderDetailsForAdmin: orderDetailsForAdminReducer,
  userOrders: getUserOrdersReducer,
  cancelOrder: cancelOrderIfPendingReducer,
  orderIsPlaced: createOrderReducer,
  // cart reducers
  cart: cartReducer,
  favouritesProducts: addToFavouritesReducer,
});
