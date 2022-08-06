export const listAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "LIST_ALL_ORDERS_REQUEST":
      return { loading: true, orders: [] };
    case "LIST_ALL_ORDERS_SUCCESS":
      return { loading: false, orders: action.payload };
    case "LIST_ALL_ORDERS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
