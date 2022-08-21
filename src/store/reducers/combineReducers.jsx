import { combineReducers } from "redux";
import {
  addressReducer,
  getAllUsersReducer,
  getUsersDetailsReducer,
  makeUserAdminReducer,
  updateUserInfoReducer,
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
  createReviewReducer,
  updateProductImageReducer,
} from "./productReducers";
import {
  cancelOrderIfPendingReducer,
  changeOrderStatusReducer,
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
  addAddress: addressReducer,
  allUsers: getAllUsersReducer,
  userDetails: getUsersDetailsReducer,
  userUpdated: updateUserInfoReducer,
  userAdmin: makeUserAdminReducer,
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
  updateProductImage: updateProductImageReducer,
  productReview: createReviewReducer,
  // orderReducers
  allOrders: listAllOrdersReducer,
  orderDetailsForAdmin: orderDetailsForAdminReducer,
  userOrders: getUserOrdersReducer,
  cancelOrder: cancelOrderIfPendingReducer,
  orderIsPlaced: createOrderReducer,
  orderIsChanged: changeOrderStatusReducer,
  // cart reducers
  cart: cartReducer,
  favouritesProducts: addToFavouritesReducer,
});
