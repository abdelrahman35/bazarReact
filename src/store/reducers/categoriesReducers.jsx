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

// create new category reducer

export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NEW_CATEGORY_REQUEST":
      return { loading: true };
    case "CREATE_NEW_CATEGORY_SUCCESS":
      return { loading: false, category: action.payload };
    case "CREATE_NEW_CATEGORY_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// DELETE CATEGORY REDUCER

export const deleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_CATEGORY_REQUEST":
      return { loading: true };
    case "DELETE_CATEGORY_SUCCESS":
      return { loading: false, deletedCategory: action.payload };
    case "DELETE_CATEGORY_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// update CATEGORY REDUCER

export const updateCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY_REQUEST":
      return { loading: true };
    case "UPDATE_CATEGORY_SUCCESS":
      return { loading: false, isUpdated: action.payload };
    case "update_CATEGORY_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
