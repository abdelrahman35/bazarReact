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
