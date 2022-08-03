import axios from "axios";
import axiosInstance from "./../../network/axiosInstance";

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_CATEGORIES_REQUEST" });
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const { data } = await axiosInstance.get("/category", { headers });
    dispatch({
      type: "GET_ALL_CATEGORIES_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_CATEGORIES_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const createCategory = (categoryName) => async (dispatch, getState) => {
  try {
    dispatch({ type: "CREATE_NEW_CATEGORY_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.post(
      "/category",
      { payload: { categoryName } },
      { headers }
    );
    dispatch({
      type: "CREATE_NEW_CATEGORY_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_NEW_CATEGORY_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

/*
export const deleteCategory = (categoryId) => async(dispatch , getState)=>{
  try {
    dispatch({ type: "DELETE_CATEGORY_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { data } = await axiosInstance.delete(
      "/category",
      {   categoryId  },
      { headers }
    );
    console.log(data)
    dispatch({
      type:"DELETE_CATEGORY_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_CATEGORY_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
}
*/

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "DELETE_CATEGORY_REQUEST" });
    const token = getState().userLogin.userInfo.token;

    let { data } = await axiosInstance({
      url: `/category`,
      method: "delete",
      data: { categoryId },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "DELETE_CATEGORY_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_CATEGORY_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};
