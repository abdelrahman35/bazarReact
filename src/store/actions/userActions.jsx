import axiosInstance from "./../../network/axiosInstance";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const { data } = await axiosInstance.post(
      "login",
      { payload: { email: email, password: password } },
      { headers }
    );
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "USER_REGISTER_REQUEST",
      });

      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      const { data } = await axiosInstance.post(
        "/signup",
        {
          payload: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          },
        },
        { headers }
      );

      dispatch({
        type: "USER_REGISTER_SUCCESS",
        payload: data,
      });
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT" });
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_FORGET_PASSWORD_REQUEST",
    });

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const { data } = await axiosInstance.post(
      "/forgetPassword",
      {
        email: email,
      },
      { headers }
    );
    dispatch({
      type: "USER_FORGET_PASSWORD_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_FORGET_PASSWORD_FAIL",
      payload: error,
    });
  }
};

export const resetPassword = (email, password, token) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_RESET_PASSWORD_REQUEST",
    });

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.post(
      "/resetPassword",
      {
        payload: {
          email: email,
          password: password,
        },
      },
      { headers }
    );
    dispatch({
      type: "USER_RESET_PASSWORD_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_RESET_PASSWORD_FAIL",
      payload: error,
    });
  }
};

export const changePassword =
  (userId, oldPassword, newPassword) => async (dispatch, getState) => {
    try {
      dispatch({ type: "USER_CHANGE_PASSWORD_REQUEST" });
      const token = getState().userLogin.userInfo.token;
      // const userId = getState().userLogin.userInfo.userId
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      };

      const { data } = await axiosInstance.post(
        "/chancePassword",
        {
          userId,
          payload: { oldPassword: oldPassword, newPassword: newPassword },
        },
        { headers }
      );
      dispatch({
        type: "USER_CHANGE_PASSWORD_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "USER_CHANGE_PASSWORD_FAIL", payload: error });
    }
  };
