import { combineReducers } from "redux";
import {
  userLoginReducers,
  userRegisterReducer,
} from "./userReducers";
export default combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducers,
});
