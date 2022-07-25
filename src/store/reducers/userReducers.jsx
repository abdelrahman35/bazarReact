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
      return { loading: false, email: action.payload };
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
      return { loading: false, data: action.payload };
    case "USER_RESET_PASSWORD_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
