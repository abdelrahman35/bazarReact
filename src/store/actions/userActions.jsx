import axiosInstance from "./../../network/axiosInstance";

export const login = (email, password) => (dispatch) => {
  return axiosInstance
    .post("/movie/top_rated")
    .then((response) =>
      dispatch({
        type: "GET_MOVIES_ARRAY",
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};
