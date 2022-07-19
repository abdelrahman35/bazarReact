import axios from "axios";
import axiosInstance from "./../../network/axiosInstance";

export const login = (email, password) => (dispatch) => {
  return axiosInstance
    .post("/login")
    .then((response) =>
      dispatch({
        type: "GET_MOVIES_ARRAY",
        payload: response.data,
      }),
    )
    .catch((error) => console.log(error));
};

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "USER_REGISTER_REQUEST",
      });

      const headers = {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      };

      const { data } = await axios.post(
        "https://bazaar-shop-api.herokuapp.com/signup",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        headers,
      );

      dispatch({
        type: "USER_REGISTER_SUCCESS",
        payload: data,
      });

      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
