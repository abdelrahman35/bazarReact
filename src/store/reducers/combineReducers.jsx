import { combineReducers } from "redux";
import { userRegisterReducer } from "./userReducers";
export default combineReducers({
  userRegister: userRegisterReducer,
});
