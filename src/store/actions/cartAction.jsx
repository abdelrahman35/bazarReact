import axiosInstance from "../../network/axiosInstance";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axiosInstance.get(`/product/${id}`);
    const product = data?.product;

    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: {
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: Number(qty),
      },
      stock: {
        productId: product._id,
        stock: product.quantity,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState()?.cart?.cartItems)
    );
    localStorage.setItem("cartStock", JSON.stringify(getState()?.cart?.stock));
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
  localStorage.setItem("cartStock", JSON.stringify(getState()?.cart?.stock));
};

export const setShippingAddress = (shippingAddress) => (dispatch) => {
  const addressToStore = {
    city: shippingAddress.city,
    country: shippingAddress.country,
    mobile: shippingAddress.mobile,
    street: shippingAddress.street,
  };

  dispatch({
    type: "SET_SHIPPING_ADDRESS",
    payload: addressToStore,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(addressToStore));
};
export const setPaymentMethod = (paymentMethod) => (dispatch) => {
  dispatch({
    type: "SET_PAYMENT_METHOD",
    payload: paymentMethod,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
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
    const filteredArray = JSON.parse(localStorage.getItem("wishlist")).filter(
      (product) => {
        return product?.product?._id !== productId;
      }
    );

    const newWishListArray =
      status === 200
        ? [...filteredArray, { product: favProduct }]
        : [...JSON.parse(localStorage.getItem("wishlist"))];
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

      const filteredArray = JSON.parse(localStorage.getItem("wishlist")).filter(
        (product) => {
          return product?.product?._id !== productId;
        }
      );
      const newWishListArray =
        status === 200
          ? filteredArray
          : JSON.parse(localStorage.getItem("wishlist"));

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
