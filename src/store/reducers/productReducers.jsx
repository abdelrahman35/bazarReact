export const getAllProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_REQUEST":
      return { loading: true, products: [] };
    case "GET_ALL_PRODUCTS_SUCCESS":
      return { loading: false, products: action.payload };
    case "GET_ALL_PRODUCTS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT_REQUEST":
      return { loading: true };
    case "CREATE_PRODUCT_SUCCESS":
      return { loading: false, product: action.payload };
    case "CREATE_PRODUCT_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getProductByIdReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return { loading: true, product: {} };
    case "GET_PRODUCT_SUCCESS":
      return { loading: false, product: action.payload };
    case "GET_PRODUCT_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const filterProductsReducer = (
  state = { filteredProducts: [] },
  action
) => {
  switch (action.type) {
    case "FILTER_PRODUCTS_REQUEST":
      return { loading: true };
    case "FILTER_PRODUCTS_SUCCESS":
      return { loading: false, filteredProducts: action.payload };
    case "FILTER_PRODUCTS_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
