import axios from "axios";
import axiosInstance from "../../network/axiosInstance";

export const getAllProducts = (page) => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_PRODUCTS_REQUEST" });

    const { data } = await axiosInstance.get(`/product?page=${[page]}`);

    dispatch({
      type: "GET_ALL_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCTS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
