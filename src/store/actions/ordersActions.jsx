import axiosInstace from "../../network/axiosInstance";

export const listAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "LIST_ALL_ORDERS_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstace.get("/order", { headers });
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
