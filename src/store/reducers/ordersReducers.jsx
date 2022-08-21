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
export const orderDetailsForAdminReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "ADMIN_ORDER_DETAILS_REQUEST":
      return { loading: true, order: {} };
    case "ADMIN_ORDER_DETAILS_SUCCESS":
      return { loading: false, order: action.payload };
    case "ADMIN_ORDER_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { userOrders: [] }, action) => {
  switch (action.type) {
    case "GET_USER_ORDERS_REQUEST":
      return { loading: true, userOrders: [] };
    case "GET_USER_ORDERS_SUCCESS":
      return { loading: false, userOrders: action.payload };
    case "GET_USER_ORDERS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cancelOrderIfPendingReducer = (state = {}, action) => {
  switch (action.type) {
    case "CANCEL_ORDER_REQUEST":
      return { loading: true };
    case "CANCEL_ORDER_SUCCESS":
      return { loading: false, orderIsCancelled: action.payload };
    case "CANCEL_ORDER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ORDER_REQUEST":
      return { loading: true };
    case "CREATE_ORDER_SUCCESS":
      return {
        loading: false,
        isPlaced: action.payload,
        statusCode: action.statusCode,
      };
    case "CREATE_ORDER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const changeOrderStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_ORDER_STATUS_REQUEST":
      return { loading: true };
    case "CHANGE_ORDER_STATUS_SUCCESS":
      return {
        loading: false,
        isChanged: action.payload,
        statusCode: action.statusCode,
      };
    case "CHANGE_ORDER_STATUS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
