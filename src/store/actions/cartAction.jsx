import axiosInstance from "../../network/axiosInstance";
import { favouritesArrayFromLocalStorage } from "../store";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axiosInstance.get(`/product/${id}`);
    const product = data?.product;

    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: {
        productId: product._id,
        productName: product.name,
        productImage: product.image,
        productPrice: product.price,
        productStock: product.quantity,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState()?.cart?.cartItems)
    );
  } catch (error) {
    dispatch({ type: "ADD_TO_CART_FAIL", payload: error });
  }
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: id,
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState()?.cart?.cartItems)
  );
};

export const addToFavourites = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ADD_TO_FAVOURITES_REQUEST" });
    const token = getState().userLogin.userInfo.token;
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    const { status } = await axiosInstance.put(
      "/user/wishlist",
      { productId },
      { headers }
    );

    const { data } = await axiosInstance.get(`/product/${productId}`);
    const product = data?.product;
    const favProduct = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      rating: product.rating,
    };
    const wishlist = getState().userLogin.userInfo.wishlist;
    const newWishListArray =
      status === 200
        ? [...favouritesArrayFromLocalStorage, { product: favProduct }]
        : [
            ...(favouritesArrayFromLocalStorage
              ? favouritesArrayFromLocalStorage
              : wishlist),
          ];
    localStorage.setItem("wishlist", JSON.stringify(newWishListArray));
    dispatch({
      type: "ADD_TO_FAVOURITES_SUCCESS",
      payload: newWishListArray,
      statusCode: status,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TO_FAVOURITES_FAIL",
      payload: error.response ? error.response.status : error,
    });
  }
};

export const removeFromFavourites =
  (productId) => async (dispatch, getState) => {
    try {
      dispatch({ type: "REMOVE_FROM_FAVOURITES_REQUEST" });
      const token = getState().userLogin.userInfo.token;

      const { status } = await axiosInstance({
        url: "/user/wishlist",
        method: "delete",
        data: { productId },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          authorization: `Bearer ${token}`,
        },
      });
      const wishlist = getState().userLogin.userInfo.wishlist;

      const newWishListArray =
        status === 200
          ? favouritesArrayFromLocalStorage.filter((product) => {
              return product?.product?._id !== productId;
            })
          : favouritesArrayFromLocalStorage
          ? favouritesArrayFromLocalStorage.filter(
              (product) => product?.product?._id !== productId
            )
          : wishlist.filter((product) => product?.product?._id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(newWishListArray));
      dispatch({
        type: "REMOVE_FROM_FAVOURITES_SUCCESS",
        payload: newWishListArray,
        statusCode: status,
      });
    } catch (error) {
      dispatch({
        type: "REMOVE_FROM_FAVOURITES_FAIL",
        payload: error.response ? error.response.status : error,
      });
    }
  };
