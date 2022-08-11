import axiosInstance from "../../network/axiosInstance";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  // try {
  const { data } = await axiosInstance.get(`/product/${id}`);
  const product = data?.product;
  console.log(getState().cart);

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
  // } catch (error) {
  //   console.log(error);
  //   dispatch({ type: "ADD_TO_CART_FAIL", payload: error });
  // }
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
