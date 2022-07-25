import { combineReducers } from "redux";
import {
  userLoginReducers,
  userRegisterReducer,
  userResetPasswordReducer,
} from "./userReducers";
export default combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducers,
  resetPassword: userResetPasswordReducer,
});
