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

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT_REQUEST":
      return { loading: true };
    case "DELETE_PRODUCT_SUCCESS":
      return { loading: false, isDeleted: action.payload };
    case "DELETE_PRODUCT_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_REQUEST":
      return { loading: true };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        loading: false,
        productIsUpdated: action.payload,
        statusCode: action.statusCode,
      };
    case "UPDATE_PRODUCT_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_REVIEW_REQUEST":
      return { loading: true };
    case "CREATE_REVIEW_SUCCESS":
      return {
        loading: false,
        isReviewed: action.payload,
        statusCode: action.statusCode,
      };
    case "CREATE_REVIEW_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
