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
    localStorage.setItem("address", JSON.stringify(data?.address));
    localStorage.setItem("wishlist", JSON.stringify(data?.wishlist));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error.response ? error.response.status : error,
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
        payload: error.response ? error.response.status : error,
      });
    }
  };
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("wishlist");
  localStorage.removeItem("address");
  localStorage.removeItem("orderDetails");
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

    const { data, status } = await axiosInstance.post(
      "/forgetPassword",
      {
        payload: {
          email: email,
        },
      },
      { headers }
    );
    dispatch({
      type: "USER_FORGET_PASSWORD_SUCCESS",
      payload: data,
      statusCode: status,
    });
    localStorage.setItem("FP", JSON.stringify([data, status]));
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
    const { data, status } = await axiosInstance.post(
      "/resetPassword",
      {
        payload: {
          email: email,
          password: password,
        },
      },
      { headers }
    );
    localStorage.setItem("RP", JSON.stringify([data, status]));
    dispatch({
      type: "USER_RESET_PASSWORD_SUCCESS",
      payload: data,
      statusCode: status,
    });
  } catch (error) {
    dispatch({
      type: "USER_RESET_PASSWORD_FAIL",
      payload: error,
    });
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch, getState) => {
    try {
      dispatch({ type: "USER_CHANGE_PASSWORD_REQUEST" });
      const token = getState().userLogin.userInfo.token;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      };

      const { data } = await axiosInstance.patch(
        "/changePassword",
        {
          payload: { oldPassword, newPassword },
        },
        { headers }
      );

      dispatch({
        type: "USER_CHANGE_PASSWORD_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "USER_CHANGE_PASSWORD_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };

export const getAllUsers = (pageNum) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_ALL_USERS_REQUEST" });
    const token = getState().userLogin.userInfo.token;

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.get(`/user?page=${pageNum}`, {
      headers,
    });
    dispatch({
      type: "GET_ALL_USERS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_USERS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
export const getUserDetails =
  (userId, pageNum) => async (dispatch, getState) => {
    try {
      dispatch({ type: "GET_USER_DETAILS_REQUEST" });
      const token = getState().userLogin.userInfo.token;

      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      };
      const { data } = await axiosInstance.get(
        `/user/${userId}?page=${pageNum}`,
        {
          headers,
        }
      );
      dispatch({
        type: "GET_USER_DETAILS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_DETAILS_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };
export const updateUserInfo = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "UPDATE_USER_INFO_REQUEST" });
    const token = getState().userLogin.userInfo.token;

    const { data, status } = await axiosInstance({
      url: "/user",
      method: "patch",
      data: {
        payload: {
          ...userData,
        },
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "UPDATE_USER_INFO_SUCCESS",
      payload: data,
      statusCode: status,
    });
    localStorage.setItem("US", JSON.stringify([data, status]));
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_INFO_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const addNewAddress = (values, city) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ADD_NEW_ADDRESS_REQUEST" });
    const token = getState().userLogin.userInfo.token;

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    const { data, status } = await axiosInstance.post(
      "/user/address",
      {
        payload: {
          street: values.street,
          country: values.country,
          mobile: values.mobile,
          city,
        },
      },
      { headers }
    );

    dispatch({
      type: "ADD_NEW_ADDRESS_SUCCESS",
      payload: data,
      statusCode: status,
    });
    localStorage.setItem("ad", JSON.stringify(status));
  } catch (error) {
    dispatch({
      type: "ADD_NEW_ADDRESS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const deleteAddress = (addressId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "DELETE_ADDRESS_REQUEST" });
    const token = getState().userLogin.userInfo.token;

    const { data, status } = await axiosInstance({
      url: `/user/address/${addressId}`,
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "DELETE_ADDRESS_SUCCESS",
      payload: data,
      statusCode: status,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_ADDRESS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const updateAddress =
  (addressId, newAddress) => async (dispatch, getState) => {
    try {
      dispatch({ type: "UPDATE_ADDRESS_REQUEST" });
      const token = getState().userLogin.userInfo.token;
      const { data, status } = await axiosInstance({
        url: "/user/address",
        method: "put",
        data: {
          addressId,
          payload: {
            ...newAddress,
          },
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: "UPDATE_ADDRESS_SUCCESS",
        payload: data,
        statusCode: status,
      });
      localStorage.setItem("ad", JSON.stringify(status));
    } catch (error) {
      dispatch({
        type: "UPDATE_ADDRESS_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };

export const makeUserAdmin = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "MAKE_USER_ADMIN_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const { data, status } = await axiosInstance({
      url: `/user/addAdmin/${userId}`,
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "MAKE_USER_ADMIN_SUCCESS",
      payload: data,
      statusCode: status,
    });
    localStorage.setItem("UA", JSON.stringify([data, status]));
  } catch (error) {
    dispatch({
      type: "MAKE_USER_ADMIN_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
