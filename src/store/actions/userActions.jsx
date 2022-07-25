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
      headers,
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
        "Content-Type": "text/plain",
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
        headers,
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
