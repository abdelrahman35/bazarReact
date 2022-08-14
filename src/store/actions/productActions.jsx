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
    } catch (error) {
      dispatch({
        type: "CREATE_PRODUCT_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };
export const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });
    const token = getState().userLogin.userInfo.token;

    const { data } = await axiosInstance({
      url: `/product`,
      data: { productId },
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "DELETE_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "DELETE_PRODUCT_FAIL",
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

export const filterProducts = (filterQuery) => async (dispatch) => {
  try {
    dispatch({ type: "FILTER_PRODUCTS_REQUEST" });

    const { data } = await axiosInstance.get(`/product/filter?${filterQuery}`);

    dispatch({
      type: "FILTER_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FILTER_PRODUCTS_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const updateProduct =
  (productId, values, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
      const token = getState().userLogin.userInfo.token;
      const { data } = axiosInstance({
        url: "/product",
        method: "put",
        data: {
          productId,
          payload: {
            name: values?.name,
            description: values?.description,
            price: values?.price,
            modelYear: values?.modelYear,
            quantity: values?.quantity,
            category,
          },
        },
        // data: {
        //   productId,
        //   payload: {
        //     values,
        //     category,
        //   },
        // },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          authorization: `Bearer ${token}`,
        },
      });
      // const data = {};
      dispatch({
        type: "UPDATE_PRODUCT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_PRODUCT_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };
