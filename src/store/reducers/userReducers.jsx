export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true };

    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload };

    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };

    case "USER_LOGOUT":
      return {};

    default:
      return state;
  }
};

export const userForgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_FORGET_PASSWORD_REQUEST":
      return { loading: true };
    case "USER_FORGET_PASSWORD_SUCCESS":
      return { loading: false, forgetPassword: action.payload };
    case "USER_FORGET_PASSWORD_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_RESET_PASSWORD_REQUEST":
      return { loading: true };
    case "USER_RESET_PASSWORD_SUCCESS":
      return { loading: false, resetPassword: action.payload };
    case "USER_RESET_PASSWORD_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userChangePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_CHANGE_PASSWORD_REQUEST":
      return { loading: true };
    case "USER_CHANGE_PASSWORD_SUCCESS":
      return { loading: false, changePasswordPayload: action.payload };
    case "USER_CHANGE_PASSWORD_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addNewAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_ADDRESS_REQUEST":
      return { loading: true };

    case "ADD_NEW_ADDRESS_SUCCESS":
      return {
        loading: false,
        address: action.payload,
        statusCode: action.statusCode,
      };
    case "ADD_NEW_ADDRESS_FAIL":
      return { loading: false, error: action.payload };
    case "DELETE_ADDRES_REQUEST":
      return { loading: true };
    case "DELETE_ADDRES_SUCCESS":
      return {
        loading: false,
        address: action.payload,
        statusCode: action.statusCode,
      };
    case "DELETE_ADDRES_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
