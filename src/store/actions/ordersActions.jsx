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

export const createOrder =
  (productsArray, shippingAddress, paymentMethod) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: "CREATE_ORDER_REQUEST" });
      const token = getState().userLogin.userInfo.token;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      };

      const { data, status } = await axiosInstance.post(
        "/order",
        {
          payload: {
            products: productsArray,
            paymentMethod,
            shippingAddress,
          },
        },
        { headers }
      );
      dispatch({
        type: "CREATE_ORDER_SUCCESS",
        payload: data,
        statusCode: status,
      });
      localStorage.setItem("ORS", JSON.stringify([data, status]));
    } catch (error) {
      localStorage.setItem("EROFORP", JSON.stringify(error));
      // EROFORP => error of order place
      dispatch({
        type: "CREATE_ORDER_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };

export const successPaymentHandler = () => async (dispatch, getState) => {
  try {
    const orderId = JSON.parse(localStorage.getItem("cs"));
    const token = getState().userLogin.userInfo.token;

    dispatch({
      type: "SUCCESS_PAYMENT_HANDLE_REQUEST",
    });
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.get(`/order/success/${orderId[1]}`, {
      headers,
    });
    dispatch({
      type: "SUCCESS_PAYMENT_HANDLE_SUCCESS",
      payload: data,
    });
    localStorage.removeItem("cs");
  } catch (error) {
    dispatch({
      type: "SUCCESS_PAYMENT_HANDLE_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
