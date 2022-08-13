import axiosInstance from "../../network/axiosInstance";

export const listAllOrders = (pageNum) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LIST_ALL_ORDERS_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.get(`/order?page=${pageNum}`, {
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
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.get(`/order/${orderId}`, { headers });
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
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.get(`/order/me?page=${pageNum}`, {
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

export const cancelOrderIfPending = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "CANCEL_ORDER_REQUEST",
    });
    const token = getState().userLogin.userInfo.token;

    const { data } = await axiosInstance({
      url: `/order/${orderId}`,
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "CANCEL_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CANCEL_ORDER_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
