import { combineReducers } from "redux";
import {
  userChangePasswordReducer,
  userLoginReducers,
  userRegisterReducer,
} from "./userReducers";
import { getAllCategoriesReducer } from "./categoriesReducers";
export default combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducers,
  changePassword: userChangePasswordReducer,
  allCategories: getAllCategoriesReducer,
});
