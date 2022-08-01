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

export const createProduct =
  (formValues, image, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: "CREATE_PRODUCT_REQUEST" });
      const token = getState().userLogin.userInfo.token;
      const productFormData = new FormData();
      productFormData.append("name", formValues.name);
      productFormData.append("category", category);
      productFormData.append("description", formValues.description);
      productFormData.append("price", formValues.price);
      productFormData.append("quantity", formValues.quantity);
      productFormData.append("modelYear", formValues.modelYear);
      productFormData.append("image", image);

      const headers = {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      };

      const data = await axiosInstance.post("/product", productFormData, {
        headers,
      });
      console.log(data);
      dispatch({
        type: "CREATE_PRODUCT_SUCCESS",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: "CREATE_PRODUCT_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };
