// get all categories reducer:

export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES_REQUEST":
      return { loading: true, categories: [] };
    case "GET_ALL_CATEGORIES_SUCCESS":
      return { loading: false, categories: action.payload };
    case "GET_ALL_CATEGORIES_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
