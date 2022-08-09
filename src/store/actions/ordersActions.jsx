import axiosInstace from "../../network/axiosInstance";

export const listAllOrders = (pageNum) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LIST_ALL_ORDERS_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstace.get(`/order?page=${pageNum}`, {
      headers,
    });
    dispatch({
      type: "LIST_ALL_ORDERS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LIST_ALL_ORDERS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const orderDetailsForAdmin = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ADMIN_ORDER_DETAILS_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstace.get(`/order/${orderId}`, { headers });
    dispatch({
      type: "ADMIN_ORDER_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_ORDER_DETAILS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const getUserOrders = (pageNum) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_USER_ORDERS_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstace.get(`/order/me?page=${pageNum}`, {
      headers,
    });
    dispatch({
      type: "GET_USER_ORDERS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_ORDERS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
