import axiosInstance from "../../network/axiosInstance";

export const getAllProducts = (page) => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_PRODUCTS_REQUEST" });

    const { data } = await axiosInstance.get(`/product?page=${page}`);

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

export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PRODUCT_REQUEST" });
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
    const { data } = await axiosInstance.get(`/product/${id}`, { headers });
    console.log(data);
    dispatch({
      type: "GET_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCT_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const filterProducts = (maxPrice, minPrice) => async (dispatch) => {
  try {
    dispatch({ type: "FILTER_PRODUCTS_REQUEST" });
    console.log(minPrice, typeof minPrice);
    console.log(maxPrice, typeof maxPrice);
    const { data } = await axiosInstance.get(
      `/product/filter?priceMax=${null}&priceMin=${minPrice}`
    );
    console.log(data);
    dispatch({
      type: "FILTER_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "FILTER_PRODUCTS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
