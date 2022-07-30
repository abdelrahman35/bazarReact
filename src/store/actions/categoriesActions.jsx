import axiosInstance from "./../../network/axiosInstance";

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_CATEGORIES_REQUEST" });
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const { data } = await axiosInstance.get("/category", { headers });
    dispatch({
      type: "GET_ALL_CATEGORIES_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_CATEGORIES_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
